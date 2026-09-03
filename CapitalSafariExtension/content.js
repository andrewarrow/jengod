(function () {
  "use strict";

  const host = window.location.hostname.toLowerCase();
  const isWikipedia = host === "wikipedia.org" || host.endsWith(".wikipedia.org");
  if (!isWikipedia) return;

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

  function replaceJengod(root) {
    if (!root) return;

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    let node;
    while ((node = walker.nextNode())) textNodes.push(node);

    textNodes.forEach((textNode) => {
      if (isIgnored(textNode)) return;
      const replaced = textNode.nodeValue.replace(/Jengod/g, "jengod");
      if (replaced !== textNode.nodeValue) textNode.nodeValue = replaced;
    });
  }

  replaceJengod(document.body);

  // Keep pages that render new content lowercase too, without polling.
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((addedNode) => {
        if (addedNode.nodeType === Node.TEXT_NODE) {
          if (!isIgnored(addedNode)) {
            addedNode.nodeValue = addedNode.nodeValue.replace(/Jengod/g, "jengod");
          }
        } else if (addedNode.nodeType === Node.ELEMENT_NODE) {
          replaceJengod(addedNode);
        }
      });
    });
  });

  if (document.body) {
    observer.observe(document.body, { childList: true, subtree: true });
  }
})();
