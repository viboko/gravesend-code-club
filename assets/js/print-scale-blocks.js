(function () {
    "use strict";

    // Scratch and MakeCode blocks are rendered at a size that looks right
    // on screen, but a CSS pixel maps directly to a physical inch when
    // printing, so the same size looks far too large on paper. There's no
    // CSS way to shrink every block by a fixed factor regardless of its
    // own size (max-width only ever caps growth), so this resizes each
    // block's own width/height just before printing starts, and restores
    // the original size afterwards so the screen view is never affected.

    const SCALE = 0.5;
    const selector = ".scratchblocks svg, img[alt='MakeCode blocks']";
    const originalSizes = new Map();

    function scaleForPrint() {
        document.querySelectorAll(selector).forEach(function (el) {
            const rect = el.getBoundingClientRect();

            originalSizes.set(el, {
                width: el.style.width,
                height: el.style.height
            });

            el.style.width = (rect.width * SCALE) + "px";
            el.style.height = (rect.height * SCALE) + "px";
        });
    }

    function restoreAfterPrint() {
        originalSizes.forEach(function (size, el) {
            el.style.width = size.width;
            el.style.height = size.height;
        });
        originalSizes.clear();
    }

    window.addEventListener("beforeprint", scaleForPrint);
    window.addEventListener("afterprint", restoreAfterPrint);
})();
