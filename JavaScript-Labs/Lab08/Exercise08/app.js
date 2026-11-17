const boxClass = 'demo-item';
function outputBox(num) {
  const box = '<article class="' + boxClass + '" id="div' + num + '"><h3>This is div ' + num + '</h3><p>Được tạo bởi outputBox(' + num + ').</p></article>';
  return box;
}
const container = document.getElementById('boxes-output');
for (let count = 1; count < 6; count += 1) container.insertAdjacentHTML('beforeend', outputBox(count));
document.getElementById('scope-button').addEventListener('click', () => {
  try { console.log(box); } catch (error) {
    document.getElementById('scope-output').textContent = 'ReferenceError: box là biến cục bộ trong outputBox().';
    console.info('Exercise 8.8: box is local to outputBox().');
  }
});
