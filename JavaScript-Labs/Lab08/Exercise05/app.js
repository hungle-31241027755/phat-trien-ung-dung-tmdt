window.labConsoleDemo = { count: 2, output: 'Hai phần tử mảng' };
document.getElementById('log-button').addEventListener('click', () => console.log('Giá trị hiện tại:', window.labConsoleDemo));
document.getElementById('warn-button').addEventListener('click', () => console.warn('Đây là một cảnh báo mẫu.'));
document.getElementById('error-button').addEventListener('click', () => {
  try { document.querySelector('#selector-khong-ton-tai').textContent = 'test'; }
  catch (error) { console.error('Lỗi mẫu đã được bắt:', error); }
});
