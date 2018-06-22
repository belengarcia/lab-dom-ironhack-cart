
function getPrices () {
var calculatePriceButton = document.getElementById('calc-prices-button');
  
calculatePriceButton.onclick = function () {
    var row = document.getElementsByClassName('product');
    for (var i = 0 ; i<row.length ; i++){
        var productCost = document.getElementsByClassName('cost')[i].innerText;
        productQuantity = document.getElementsByClassName('quantity')[i].value;
        
        var price = productCost * productQuantity;
        
        var showPrice = document.getElementsByClassName('total-price')[i];
        showPrice.innerHTML = price;
    }
    getTotalPrice();
  }
}

var getTotalPrice = function() {
  var elementsPrice = document.getElementsByClassName('total-price');
  var sumElements = 0;

  for (i = 0 ; i<elementsPrice.length ; i++){
    sumElements += Number(elementsPrice[i].innerText);
  }
  var showTotalPrice = document.getElementById('final-total-price');
  showTotalPrice.innerText = 'Total Price: $' + sumElements;
}

function deleteElement(){

  var buttonBundle = document.getElementsByClassName('delete-btn')
  
  for(var i = 0; i < buttonBundle.length; i++) {
    document.getElementById(i).onclick = function(event) {
      var id = '#' + event.currentTarget.id;
      document.getElementById(id).remove();
    }
  }

}

// function deleteItem(e){

// }

// function getPriceByProduct(itemNode){

// }

// function updatePriceByProduct(productPrice, index){

// }

// function getTotalPrice() {
  
// }

// function createQuantityInput(){

// }

// function createDeleteButton(){

// }

// function createQuantityNode(){

// }

// function createItemNode(dataType, itemData){

// }

// function createNewItemRow(itemName, itemUnitPrice){

// }

// function createNewItem(){

// }

window.onload = function(){
  getPrices();
  deleteElement();

//  var calculatePriceButton = document.getElementById('calc-prices-button');
//  var createItemButton = document.getElementById('new-item-create');
//  var deleteButtons = document.getElementsByClassName('btn-delete');
//
//  calculatePriceButton.onclick = getTotalPrice;
//  createItemButton.onclick = createNewItem;
//
//  for(var i = 0; i<deleteButtons.length ; i++){
//    deleteButtons[i].onclick = deleteItem;
//  }
};
