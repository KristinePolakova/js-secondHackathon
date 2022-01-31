
function removeProduct1() {
    const product1 = document.getElementById('product1');
    product1.remove();
};

function removeProduct2() {
    const product2 = document.getElementById('product2');
    product2.remove();
};

function removeProduct3() {
    const product3 = document.getElementById('product3');
    product3.remove();
};

function removeProduct4() {
    const product4 = document.getElementById('product4');
    product4.remove();
};



const product1Count = document.getElementById('product1-count');
const product2Count = document.getElementById('product2-count');
const product3Count = document.getElementById('product3-count');
const product4Count = document.getElementById('product4-count');
const product5Count = document.getElementById('product5-count');

const product1Price = 5.39;
const product2Price = 9.99;
const product3Price = 12.12;
const product4Price = 5.39;
const product5Price = 9.99;


const product1PriceTotalAllItems = document.getElementById('product1-price-all-items');
const product2PriceTotalAllItems = document.getElementById('product2-price-all-items');
const product3PriceTotalAllItems = document.getElementById('product3-price-all-items');
const product4PriceTotalAllItems = document.getElementById('product4-price-all-items');
const product5PriceTotalAllItems = document.getElementById('product5-price-all-items');

const totalCartValue = document.getElementById('cart-total-amount');

const calculateTotalSumProduct2 = () => {

    let updatedTotalCartValueProduct1 = '';
    let updatedTotalCartValueProduct2 = '';
    let updatedTotalCartValueProduct3 = '';
    let updatedTotalCartValueProduct4 = '';
    let updatedTotalCartValueProduct5 = '';

    if (product2Count.value == 0) {
        product2PriceTotalAllItems.innerHTML = 0;
    } else {
        product2PriceTotalAllItems.innerHTML = product2Count.value * product2Price
    }
  
    updatedTotalCartValueProduct2 = product2Count.value * product2Price;

    totalCartValue.innerHTML = updatedTotalCartValueProduct1 + updatedTotalCartValueProduct2 + updatedTotalCartValueProduct3 + updatedTotalCartValueProduct4 + updatedTotalCartValueProduct5;
}

const calculateTotalSumProduct5 = () => {
    let updatedTotalCartValueProduct1 = '';
    let updatedTotalCartValueProduct2 = '';
    let updatedTotalCartValueProduct3 = '';
    let updatedTotalCartValueProduct4 = '';
    let updatedTotalCartValueProduct5 = '';
    
    if (product5Count.value == 0) {
        product5PriceTotalAllItems.innerHTML = 0;
    } else {
        product5PriceTotalAllItems.innerHTML = product5Count.value * product5Price
    }

    updatedTotalCartValueProduct5 = product5Count.value * product5Price;

    totalCartValue.innerHTML = updatedTotalCartValueProduct1 + updatedTotalCartValueProduct2 + updatedTotalCartValueProduct3 + updatedTotalCartValueProduct4 + updatedTotalCartValueProduct5;

}