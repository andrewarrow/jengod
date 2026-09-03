(function () {
  "use strict";

  // Elements whose text is code, metadata, or editable user input should not
  // be rewritten. Everything else under <body> is eligible.
  const ignoredElements = new Set([
    "SCRIPT",
    "STYLE",
    "NOSCRIPT",
    "TEMPLATE",
    "TEXTAREA",
    "INPUT",
    "OPTION"
  ]);

  function isIgnored(node) {
    const parent = node.parentElement;
    return parent && (ignoredElements.has(parent.tagName) || parent.isContentEditable);
  }

  function capitalize(root) {
    if (!root) return;

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    let node;
    while ((node = walker.nextNode())) textNodes.push(node);

    textNodes.forEach((textNode) => {
      if (isIgnored(textNode)) return;
      const uppercase = textNode.nodeValue.toUpperCase();
      if (uppercase !== textNode.nodeValue) textNode.nodeValue = uppercase;
    });
  }

  capitalize(document.body);

  // Keep pages that render new content uppercase too, without polling.
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((addedNode) => {
        if (addedNode.nodeType === Node.TEXT_NODE) {
          if (!isIgnored(addedNode)) {
            addedNode.nodeValue = addedNode.nodeValue.toUpperCase();
          }
        } else if (addedNode.nodeType === Node.ELEMENT_NODE) {
          capitalize(addedNode);
        }
      });
    });
  });

  if (document.body) {
    observer.observe(document.body, { childList: true, subtree: true });
  }
})();
