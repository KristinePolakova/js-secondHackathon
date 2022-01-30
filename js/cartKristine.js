
function quantityChangeProduct1() {
    let product1TotalPrice = document.getElementById('product1TotalPrice');
    let product1Price = document.getElementById('product-1-price');
    let product1Quantity = document.getElementById('product1Quantity');
    product1Price = parseFloat(product1Price.innerText);
    product1Quantity = product1Quantity.value;
    product1TotalPrice = product1Price * product1Quantity;
    document.getElementById('product1TotalPrice').innerText = product1TotalPrice;

    // let totalPrice = document.getElementById('totalPrice');
    // let totalPriceValue = parseFloat(totalPrice.innerHTML);
    // document.getElementsByClassName('cart-total-price')[0].innerText = totalPriceValue + product1TotalPrice;
};
function quantityChangeProduct2() {
    let product2TotalPrice = document.getElementById('product2TotalPrice');
    let product2Price = document.getElementById('product-2-price');
    let product2Quantity = document.getElementById('product2Quantity');
    product2Price = parseFloat(product2Price.innerText);
    product2Quantity = product2Quantity.value;
    product2TotalPrice = product2Price * product2Quantity;
    document.getElementById('product2TotalPrice').innerText = product2TotalPrice;

};
function quantityChangeProduct3() {
    let product3TotalPrice = document.getElementById('product3TotalPrice');
    let product3Price = document.getElementById('product-3-price');
    let product3Quantity = document.getElementById('product3Quantity');
    product3Price = parseFloat(product3Price.innerText);
    product3Quantity = product3Quantity.value;
    product3TotalPrice = product3Price * product3Quantity;
    document.getElementById('product3TotalPrice').innerText = product3TotalPrice;

};


function removeProduct1() {
    const product1 = document.getElementById('product-1');
    product1.remove();
    updateCartTotal();
};

function removeProduct2() {
    const product2 = document.getElementById('product-2');
    product2.remove();
    updateCartTotal();
};

function removeProduct3() {
    const product3 = document.getElementById('product-3');
    product3.remove();
    updateCartTotal();
};


function updateCartTotal() {
    const cartItemContainer = document.getElementsByClassName('cart-items')[0];
    const cartRows = cartItemContainer.getElementsByClassName('cart-row');
    let total= 0;
    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i];
        let priceElement = cartRow.getElementsByClassName('price')[0];
        let quantityElement = cartRow.getElementsByClassName('quantity-input')[0];
        let price = parseFloat(priceElement.innerText);
        let quantity = quantityElement.value;
        total = total + (price * quantity);

    }
    document.getElementsByClassName('cart-total-price')[0].innerText = total + ' Eur';

};