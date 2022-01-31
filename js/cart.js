

function totalPriceChangeProduct1() {

  let product1TotalPrice = document.getElementById('sum-price1');
  let product1Price = document.getElementById('price1');
  let product1Quantity = document.getElementById('form1');
  product1Price = parseFloat(product1Price.innerText);
  product1Quantity = product1Quantity.value;
  product1TotalPrice = (product1Price * product1Quantity).toFixed(2)
  document.getElementById('sum-price1').innerText = product1TotalPrice;
  updateCartTotal()
};

function totalPriceChangeProduct2() {
  let product2TotalPrice = document.getElementById('sum-price2');
  let product2Price = document.getElementById('price2');
  let product2Quantity = document.getElementById('form2');
  product2Price = parseFloat(product2Price.innerText);
  product2Quantity = product2Quantity.value;
  product2TotalPrice = (product2Price * product2Quantity).toFixed(2)
  document.getElementById('sum-price2').innerText = product2TotalPrice;
  updateCartTotal()
};

function totalPriceChangeProduct3() {
  let product3TotalPrice = document.getElementById('sum-price3');
  let product3Price = document.getElementById('price3');
  let product3Quantity = document.getElementById('form3');
  product3Price = parseFloat(product3Price.innerText);
  product3Quantity = product3Quantity.value;
  product3TotalPrice = (product3Price * product3Quantity).toFixed(2)
  document.getElementById('sum-price3').innerText = product3TotalPrice;
  updateCartTotal()

};

function updateCartTotal() {
  let totalSum = parseFloat(0)
  let summaryTotalSum = parseFloat(0)
  let totalProduct1Sum = document.getElementById("sum-price1")
  let totalProduct2Sum = document.getElementById("sum-price2")
  let totalProduct3Sum = document.getElementById("sum-price3")
  if (totalProduct1Sum) {
    totalSum += parseFloat(totalProduct1Sum.innerText)
    summaryTotalSum += parseFloat(totalProduct1Sum.innerText)
  }
  if (totalProduct2Sum) {
    totalSum += parseFloat(totalProduct2Sum.innerText)
    summaryTotalSum += parseFloat(totalProduct2Sum.innerText)
  }
  
  if (totalProduct3Sum) {
    totalSum += parseFloat(totalProduct3Sum.innerText)
    summaryTotalSum += parseFloat(totalProduct3Sum.innerText)
  }
  

  document.getElementById("sum-total").innerText = totalSum.toFixed(2)
  document.getElementById("summary-sum-total").innerText = totalSum.toFixed(2)

}

function removeProduct(productDeleteBtn) {
  const product = productDeleteBtn.parentNode.parentNode.parentNode.parentNode
  const summaryProductId = "summary-" + product.id
  product.parentNode.removeChild(product)
  updateCartTotal()

  const summaryProduct = document.getElementById(summaryProductId)
  summaryProduct.parentNode.removeChild(summaryProduct)
}

function addAddress() {

  const usernameInput = document.getElementById('username-input');
  const messageInput = document.getElementById('input-message');

  if (usernameInput.value == '' || messageInput.value == '') {
      alert('Please fill in empty fields')
      return false;
  }

  const newShippingAddress = `
  
                    <p class="username-submitted">${usernameInput.value}</p>
                      
  `
  const newBillingAddress = `
  
                    <p class="submitted-message">${messageInput.value}</p>
      
`

  document.getElementById('summary-shipping-address').innerHTML += newShippingAddress;
  document.getElementById('summary-billing-address').innerHTML += newBillingAddress;


  $('#nav-summary-tab').tab('show');

  let blabla = document.querySelector('.nav-summary-tab')

};







