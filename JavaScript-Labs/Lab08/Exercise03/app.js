// count is initialized and incremented by hello.js during HTML parsing.
const message = document.getElementById('external-message');

document.getElementById('count-value').textContent = count;
document.getElementById('count-button').addEventListener('click', () => {
  count += 1;
  document.getElementById('count-value').textContent = count;
  message.textContent = 'External script đã cập nhật bộ đếm lên ' + count + '.';
});
