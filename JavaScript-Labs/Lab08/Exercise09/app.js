const taxRegion = document.getElementById('tax-region');
const calculateTax = (amount, taxRule) => amount * taxRule();
function calculateTotal(price, quantity, taxRule) {
  const amount = price * quantity;
  return amount + calculateTax(amount, taxRule);
}
document.getElementById('calculate-button').addEventListener('click', () => {
  const price = Number(document.getElementById('unit-price').value) || 0;
  const quantity = Math.max(1, Number(document.getElementById('quantity').value) || 1);
  const rate = Number(taxRegion.value);
  const total = calculateTotal(price, quantity, () => rate);
  document.getElementById('total-output').textContent = 'Thành tiền: $' + total.toFixed(2) + ' (thuế ' + (rate * 100) + '%).';
});
document.getElementById('calculate-button').click();
