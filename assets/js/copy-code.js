// Adds a copy-to-clipboard button to every ```python code block, shown
// when the block is hovered or focused. Other fenced blocks (```text
// output, ```scratch, ```makecode) are left alone - only Python is code
// someone would want to paste into their editor.
document.addEventListener("DOMContentLoaded", function () {
  var copyIcon = '<i class="fas fa-copy" aria-hidden="true"></i>';
  var copiedIcon = '<i class="fas fa-check" aria-hidden="true"></i>';

  document.querySelectorAll(".content div.language-python.highlighter-rouge").forEach(function (block) {
    var code = block.querySelector("pre.highlight code");
    if (!code) {
      return;
    }

    var button = document.createElement("button");
    button.type = "button";
    button.className = "copy-code-button";
    button.setAttribute("aria-label", "Copy code to clipboard");
    button.innerHTML = copyIcon;

    button.addEventListener("click", function () {
      navigator.clipboard.writeText(code.textContent.replace(/\n$/, "")).then(function () {
        button.classList.add("copy-code-button--copied");
        button.setAttribute("aria-label", "Copied!");
        button.innerHTML = copiedIcon;

        setTimeout(function () {
          button.classList.remove("copy-code-button--copied");
          button.setAttribute("aria-label", "Copy code to clipboard");
          button.innerHTML = copyIcon;
        }, 1500);
      }, function () {
        // Clipboard access can be denied by browser/permissions-policy
        // settings outside this site's control - fail quietly rather than
        // leaving an unhandled rejection in the console.
      });
    });

    block.appendChild(button);
  });
});
