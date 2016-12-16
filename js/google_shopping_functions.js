var data = require('../products.json')
// console.log(data);

/*
* example function called getItemsCount
* input: accepts full item data
* output: returns the length of the items array
*/
// function getItemsCount(itemData) {
//   return itemData.items.length;
// }

//
// function getItemsCount (data) {
//   var array = data.items
//   var length = array.length
//   return length
// }
//
// console.log(getItemsCount(data));
function getItems (objectData) {
  return objectData.items
}

var items = getItems(data)
// // //
function getItemsByBrand (items, newbrand) {
  var newbrandarr = []
  for (var i = 0; i < items.length; i++) {
    var currentbrand = items[i].product.brand
    if (currentbrand === newbrand) {
      newbrandarr.push(items[i])
    }
  }
  return (newbrandarr)
}
// console.log(getItemsByBrand(items, 'Sony'))
// //
function getItemsByAuthor (items, replacingAuthor) {
var newAuthorArr = []
for (var i = 0; i < items.length; i++) {
  var authorname = items[i].product.author.name;
  if (authorname.indexOf(replacingAuthor) >= 0) {
    newAuthorArr.push(items[i])
  }
}
return(newAuthorArr);

}
// // // //
// console.log(getItemsByAuthor (items,'eBay'));
// //
// // //
function getAvailableProducts (items) {
var hasStock = []
for (var i = 0; i < items.length; i++) {
  var availableProducts = items[i].product.inventories[0].availability;
  if (availableProducts === 'inStock') {
    hasStock.push(items[i].product.title)
  }
}
return(hasStock);
}
//
// console.log(getAvailableProducts(items));
// // //
// // //
var sonyItems = getItemsByBrand (items, 'Sony')
// console.log(sonyItems);
// // // //
var sonyAvailable = getAvailableProducts (sonyItems)
// console.log(sonyAvailable);
// //
var Adorama = getItemsByAuthor (items, 'Adorama Camera')
// console.log(Adorama);

var nikon = getItemsByBrand (items,'Nikon')
// console.log(nikon);

var nikonebay = getItemsByAuthor (nikon, 'eBay')
console.log(nikonebay);

// var nikon = getItemsByBrand(itemsArray, 'Nikon')
// console.log(nikon);
