(function () {
    "use strict";

    const makeCodeUrl = "https://makecode.microbit.org/";
    // Kramdown renders a ```makecode fenced block as a plain
    // <pre><code class="language-makecode">, the same as scratchblocks.js's
    // ```scratch blocks - not wrapped in a `div.language-makecode` (that
    // wrapping only happens for languages Jekyll's Rouge highlighter
    // recognises, which "makecode" isn't).
    const selector = "pre > code.language-makecode";

    // Rendering is a round trip through the iframe, so the block stays
    // hidden (see custom.scss) until it's replaced with an image, to avoid
    // a flash of raw code. If that round trip doesn't finish - the render
    // fails, or the iframe never responds at all (blocked, offline,
    // makecode.microbit.org down) - un-hide the raw code as a fallback
    // rather than leaving a gap where the snippet should be.
    const FALLBACK_TIMEOUT_MS = 8000;

    let renderer;
    let nextId = 0;

    function showRawCode(pre) {
        pre.style.display = "block";
    }

    /*
     * Create the hidden MakeCode rendering iframe.
     */
    function injectRenderer() {
        renderer = document.createElement("iframe");

        renderer.id = "makecoderenderer";
        renderer.src = makeCodeUrl + "--docs?render=1";
        renderer.title = "MakeCode block renderer";

        renderer.style.position = "absolute";
        renderer.style.left = "0";
        renderer.style.bottom = "0";
        renderer.style.width = "1px";
        renderer.style.height = "1px";
        renderer.style.border = "0";

        document.body.appendChild(renderer);
    }

    /*
     * Ask MakeCode to render one snippet.
     */
    function renderSnippet(code) {
        const pre = code.parentElement;
        const id = "makecode-snippet-" + (nextId++);

        pre.id = id;

        renderer.contentWindow.postMessage({
            type: "renderblocks",
            id: id,
            code: code.textContent
        }, makeCodeUrl);
    }

    /*
     * Receive messages from the MakeCode renderer.
     */
    window.addEventListener("message", function (event) {
        const message = event.data;

        // Ignore messages that aren't from MakeCode.
        if (!message || message.source !== "makecode") {
            return;
        }

        if (message.type === "renderready") {
            document.querySelectorAll(selector).forEach(renderSnippet);
        }

        else if (message.type === "renderblocks") {
            const pre = document.getElementById(message.id);

            if (!pre) {
                return;
            }

            if (!message.uri) {
                showRawCode(pre);
                return;
            }

            const image = document.createElement("img");

            image.src = message.uri;
            image.width = message.width;
            image.height = message.height;
            image.alt = "MakeCode blocks";

            // Replace the code block with the rendered blocks.
            pre.replaceWith(image);
        }
    });

    /*
     * Start the renderer once the page has loaded.
     */
    function init() {
        if (!document.querySelector(selector)) {
            return;
        }

        injectRenderer();

        // Covers every failure mode in one place: the iframe never loads
        // or never responds (blocked, offline, makecode.microbit.org
        // down), "renderready" never arrives, or an individual render
        // fails. Anything still unrendered after this long is un-hidden -
        // a successfully rendered block has already been replaced by then,
        // so this only ever touches the ones still stuck.
        setTimeout(function () {
            document.querySelectorAll(selector).forEach(function (code) {
                showRawCode(code.parentElement);
            });
        }, FALLBACK_TIMEOUT_MS);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();