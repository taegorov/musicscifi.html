var price;
var quantity;
var total;

price = 100;
quantity = 1430;
total = price * quantity;

var el = document.getElementById('cost');
el.textContent = total + ' good';