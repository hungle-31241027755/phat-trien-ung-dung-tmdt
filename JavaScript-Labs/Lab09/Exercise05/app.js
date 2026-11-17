function showLoadedContent() {
  const divToGet = document.getElementById('div1');
  const divs = document.querySelectorAll('.demo-item[id^="div"]');
  document.getElementById('load-status').textContent = 'Load event đã chạy. div1 = “' + divToGet.innerHTML + '”. Đã đọc ' + divs.length + ' phần tử.';
}
window.addEventListener('load', showLoadedContent);
document.getElementById('read-again').addEventListener('click', showLoadedContent);
