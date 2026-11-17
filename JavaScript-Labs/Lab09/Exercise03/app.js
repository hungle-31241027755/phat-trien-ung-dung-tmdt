let createdCount = 0;
document.getElementById('add-paragraph').addEventListener('click', () => {
  createdCount += 1;
  const paragraph = document.createElement('p');
  paragraph.appendChild(document.createTextNode('This is programmatically created #' + createdCount));
  document.getElementById('generated-stories').appendChild(paragraph);
  document.getElementById('dom-result').textContent = 'Đã tạo và append một paragraph mới vào #first.';
});
document.getElementById('remove-item').addEventListener('click', () => {
  const icons = document.getElementById('iconList');
  const item = document.getElementById('deleteThisOne');
  if (item) { icons.removeChild(item); document.getElementById('dom-result').textContent = 'Đã xóa node con #deleteThisOne.'; }
  else document.getElementById('dom-result').textContent = 'Phần tử đã được xóa.';
});
