(function () {
    "use strict";

    const makeCodeUrl = "https://makecode.microbit.org/";
    // Kramdown renders a ```makecode fenced block as a plain
    // <pre><code class="language-makecode">, the same as scratchblocks.js's
    // ```scratch blocks - not wrapped in a `div.language-makecode` (that
    // wrapping only happens for languages Jekyll's Rouge highlighter
    // recognises, which "makecode" isn't).
    const selector = "pre > code.language-makecode";

    let renderer;
    let nextId = 0;

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

            if (!pre || !message.uri) {
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
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();