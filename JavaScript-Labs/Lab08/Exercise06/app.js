const stringObject = new String('Test');
const stringLiteral = 'Test';
document.getElementById('string-result').textContent = 'typeof object = ' + typeof stringObject + '; typeof literal = ' + typeof stringLiteral + '; object == literal: ' + (stringObject == stringLiteral) + '; object === literal: ' + (stringObject === stringLiteral);
document.getElementById('date-result').textContent = new Date().toLocaleString('vi-VN');
document.getElementById('math-result').textContent = 'π = ' + Math.PI.toFixed(5) + ' · √4 = ' + Math.sqrt(4) + ' · random = ' + Math.random().toFixed(4);
