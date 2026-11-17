function Order(product, price, quantity) {
  this.product = product;
  this.price = price;
  this.quantity = quantity;
  this.total = function () { return this.price * this.quantity; };
  this.output = function () {
    const article = document.createElement('article');
    article.className = 'demo-item';
    article.innerHTML = '<h3>' + this.product + '</h3><p>Đơn giá: $' + this.price.toFixed(2) + '</p><p>Số lượng: ' + this.quantity + '</p><p><strong>Tổng: $' + this.total().toFixed(2) + '</strong></p>';
    return article;
  };
}
const orders = [new Order('Self Portrait in a Straw Hat', 15, 2), new Order('Untitled #23', 10, 4)];
const output = document.getElementById('orders-output');
orders.forEach((order) => output.appendChild(order.output()));
