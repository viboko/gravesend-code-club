(function () {
    "use strict";

    // This runs only on the print page (see _layouts/post-print.html).
    // Scratch and MakeCode blocks are rendered at a size that looks right
    // on screen, but a CSS pixel maps directly to a physical inch when
    // printing, so the same size is far too large on paper. Neither
    // element respects a CSS max-width below its own native size (it only
    // ever caps growth), so each block's own width/height is reduced here
    // instead, once, as soon as it appears - permanently, not just while
    // printing, since this page exists only to be printed.
    //
    // Blocks appear at different times: scratchblocks renders synchronously
    // on page load, MakeCode renders asynchronously via postMessage once
    // its iframe responds. A MutationObserver catches each one as it's
    // inserted, rather than guessing how long to wait.

    const SCALE = 0.5;
    const selector = ".scratchblocks svg, img[alt='MakeCode blocks']";

    function shrink(el) {
        const rect = el.getBoundingClientRect();

        el.style.width = (rect.width * SCALE) + "px";
        el.style.height = (rect.height * SCALE) + "px";
    }

    function shrinkNewBlocks(root) {
        if (root.matches && root.matches(selector)) {
            shrink(root);
        }
        if (root.querySelectorAll) {
            root.querySelectorAll(selector).forEach(shrink);
        }
    }

    shrinkNewBlocks(document.body);

    new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            mutation.addedNodes.forEach(function (node) {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    shrinkNewBlocks(node);
                }
            });
        });
    }).observe(document.body, { childList: true, subtree: true });
})();
