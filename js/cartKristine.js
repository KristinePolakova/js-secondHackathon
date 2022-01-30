// document
// .getElementsByClassName('quantity-input')
// .addEventListener("click", function (event) {
//     event.preventDefault();
// debugger
// const quantityInputs = document.getElementsByClassName('quantity-input');
//     for (let i = 0; i < quantityInputs.length; i++) {
//         let input = quantityInputs[i];
//         input.addEventListener('change', quantityChanged)
//     }
// }); 

// function quantityChanged() {
//     const productTotalPrice = document.getElementsByClassName('product-total-price');
//     const productPrice = document.getElementsByClassName('price');
//     const productQuantity = document.getElementsByClassName('quantity-input');
//     productPrice = parseFloat(productPrice.innerText);
//     productQuantity =productQuantity.value;
//     const thisProductTotalPrice = productPrice * productQuantity;
//     productTotalPrice = thisProductTotalPrice;
    
// }

function removeProduct1() {
    const product1 = document.getElementById('product-1');
    product1.remove();
    updateCartTotal()
};

function removeProduct2() {
    const product2 = document.getElementById('product-2');
    product2.remove();
    updateCartTotal()
};

function removeProduct3() {
    const product3 = document.getElementById('product-3');
    product3.remove();
    updateCartTotal()
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