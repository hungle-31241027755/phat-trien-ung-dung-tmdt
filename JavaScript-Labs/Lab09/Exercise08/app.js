const form = document.getElementById('sampleForm');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const errorArea = document.getElementById('errors');
  const fields = form.querySelectorAll('input[type="text"], input[type="password"]');
  const emptyFields = Array.from(fields).filter((field) => field.value.trim() === '');
  fields.forEach((field) => field.removeAttribute('aria-invalid'));
  document.getElementById('success-message').textContent = '';
  if (emptyFields.length) {
    emptyFields.forEach((field) => field.setAttribute('aria-invalid', 'true'));
    errorArea.innerHTML = '<strong>Các trường không được để trống:</strong><ul>' + emptyFields.map((field) => '<li>' + field.id + '</li>').join('') + '</ul>';
    errorArea.classList.remove('hidden');
  } else {
    errorArea.classList.add('hidden');
    document.getElementById('success-message').textContent = 'Biểu mẫu hợp lệ và đã được giữ lại trên trang.';
  }
});
