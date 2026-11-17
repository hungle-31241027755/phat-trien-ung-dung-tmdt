const daysOfWeek = ['Mon', 'Tues', 'Wed', 'Thur', 'Fri'];
daysOfWeek.push('Sat');
daysOfWeek.unshift('Sun');
document.getElementById('weekday-output').textContent = 'daysOfWeek: ' + daysOfWeek.join(' · ');
const body = document.getElementById('calendar-body');
for (let week = 0; week < 5; week += 1) {
  const row = document.createElement('tr');
  for (let day = 0; day < 7; day += 1) {
    const date = week * 7 + day + 1;
    const cell = document.createElement('td');
    if (date <= 30) cell.textContent = date;
    if (date === 1) cell.classList.add('today-mark');
    row.appendChild(cell);
  }
  body.appendChild(row);
}
