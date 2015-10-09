var currentNode,
    ni = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_ELEMENT);

while(currentNode = ni.nextNode()) {
    console.log(currentNode.nodeName);
}
