const button = document.getElementById('testButton');
const content = document.getElementById('content');
const image = document.getElementById('mainImage');
let hideTimer;
button.addEventListener('click', () => {
  clearTimeout(hideTimer);
  if (button.textContent === 'Hide') {
    button.textContent = 'Show';
    content.style.opacity = '0';
    content.style.transform = 'translateY(-5px)';
    hideTimer = setTimeout(() => { content.style.display = 'none'; }, 500);
  } else {
    button.textContent = 'Hide';
    content.style.display = 'block';
    content.style.opacity = '1';
    content.style.transform = 'translateY(0)';
  }
});
image.addEventListener('mouseover', () => { image.style.filter = 'grayscale(1)'; });
image.addEventListener('mouseout', () => { image.style.filter = 'none'; });
