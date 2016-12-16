var data = require('../products.json');


var array = data.items
console.log(array);

for (var i = 0; i < array.length; i++) {
  console.log(array[i].product.title);
}
