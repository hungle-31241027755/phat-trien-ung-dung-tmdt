function setBackground(event) {
  if (event.type === 'focus') {
    event.target.style.backgroundColor = '#FFE393';
    document.getElementById('focus-status').textContent = event.target.id + ' nhận focus.';
  } else if (event.type === 'blur') {
    event.target.style.backgroundColor = 'white';
    document.getElementById('focus-status').textContent = event.target.id + ' mất focus.';
  }
}
window.addEventListener('load', () => {
  const fields = document.querySelectorAll('input[type="text"], input[type="password"]');
  fields.forEach((field) => { field.addEventListener('focus', setBackground); field.addEventListener('blur', setBackground); });
});
