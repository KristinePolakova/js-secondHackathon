function removeProduct1() {
  const product = document.getElementById('product1');
  product1.remove();
};


const price = document.getElementById("price")
// const sumPrice = document.getElementById("sum-price")
const count = document.getElementById("form1")

let sumPrice = []

function addTotalPrice() {
  
}

function decrement() {
   count--
   form1.innerHTML = count
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

  // usernameInput.value = '';
  // messageInput.value = '';

  $('#nav-summary-tab').tab('show');

};







