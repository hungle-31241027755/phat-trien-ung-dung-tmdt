const message = document.getElementById('msgArea');
document.querySelectorAll('[data-action]').forEach((button) => button.addEventListener('click', () => {
  const action = button.dataset.action;
  if (action === 'id') {
    document.getElementById('pageTitle').innerHTML = 'A <em>new</em> title';
    message.value = document.getElementById('first').innerText;
  } else if (action === 'tag') {
    const textareas = document.getElementsByTagName('textarea');
    textareas[0].value = 'Selected by tag name';
  } else if (action === 'class') {
    const counts = document.getElementsByClassName('count-number');
    message.value = Array.from(counts, (item) => item.innerText).join('\n');
  } else if (action === 'query') {
    const firstParagraph = document.querySelector('#first p');
    const allParagraphs = document.querySelectorAll('#first p');
    message.value = 'querySelector: ' + firstParagraph.innerHTML + '\nquerySelectorAll:\n' + Array.from(allParagraphs, (item) => item.innerHTML).join('\n');
    message.setAttribute('class', 'demo-input');
  } else if (action === 'style') {
    document.getElementById('features').style.backgroundColor = '#eaf3d2';
    message.value = 'features.style.backgroundColor = ' + getComputedStyle(document.getElementById('features')).backgroundColor;
  }
}));
