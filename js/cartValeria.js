const removeCartItemBtns = document.getElementsByClassName('rem');

for (let i = 0; i < removeCartItemBtns.length; i++) {
    let button = removeCartItemBtns[i];
    button.addEventListener('click', function(event) {
        let buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove();
    });
};

function updateCartTotal() {
    let cartItemContainer = document.getElementsById('cart-items')[i];
    let cartRows = cartItemContainer.getElementsByClassName('cart-row');
    let total = 0;
    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i];
        let priceElement = cartRow.getElementsByClassName('cart-price')[0];
        let vatElement = cartRow.getElementsByClassName('vat')[0];
        let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        let price = priceElement.value;
        let quantity = quantityElement.value;
        let vat = vatElement.value;
        total = total + ((price + vat)*quantity);
        console.log(cartRows);
        };
    document.getElementsByClassName('product-total-price')[0].innerText = total;
};


addOneBtn = document.getElementsByClassName('fa-plus');
removeOneBtn = document.getElementsByClassName('fa-minus');

for (i = 0; i < addOneBtn.length; i++) {
    let btn = addOneBtn[i];
    btn.addEventListener('click', function(event) {
        let btnClicked = event.target;
        document.getElementsByClassName('cart-quantity-input')[i].value =+ 1;
    }
    )};

