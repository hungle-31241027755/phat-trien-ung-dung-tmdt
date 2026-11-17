const stories = document.getElementById('stories');
document.getElementById('inspect-tree').addEventListener('click', () => {
  const first = document.getElementById('first');
  const lines = ['firstChild nodeType=' + first.firstChild.nodeType, 'firstChild.nextSibling=' + first.firstChild.nextSibling.nodeName, 'parentNode=' + first.parentNode.id];
  Array.from(stories.childNodes).forEach((node, index) => {
    const line = 'child ' + index + ' = ' + node.nodeName + ' · nodeType=' + node.nodeType;
    lines.push(line);
    console.log(line, node);
  });
  document.getElementById('tree-output').textContent = lines.join('\n');
});
document.getElementById('highlight-elements').addEventListener('click', () => {
  Array.from(stories.childNodes).forEach((node) => {
    if (node.nodeType === Node.ELEMENT_NODE) node.style.backgroundColor = '#e9f2d3';
  });
});
