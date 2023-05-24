const productEl = document.querySelector(".list-box");
//const cartItemsEl = document.querySelector(".cart-item");
//const subtotalEl = document.querySelector(".two-side");

//Render the products 
function renderProducts(){
    products.forEach((product)=>{
        productEl.innerHTML += `
        <div class="list-items">
                <img src="${product.ImgSrc}" alt="${product.Name}">
            <div class="details-product">
                <img src="3star.png" alt="">
                <h3>${product.Name}</h3>
                <p>${product.Description}</p>
                <div class="list-btns">
                    <a href="onePage.html"><h3>view</h3></a>
                </div>
            </div>
            
        </div>
        `
    });
}
renderProducts();

// cart array
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

// ADD TO CART
function addToCart(id) {
  // check if prodcut already exist in cart
  if (cart.some((item) => item.id === id)) {
    changeNumberOfUnits("plus", id);
  } else {
    const item = products.find((product) => product.id === id);

    cart.push({
      ...item,
      numberOfUnits: 1,
    });
  }

  updateCart();
}

// update cart
function updateCart(){
    renderCartItems();
    renderSubtotal();

    //Save cart to local storage
    localStorage.setItem("CART", JSON.stringify(cart));
}

// calculate and render subtotal
function renderSubtotal() {
    let totalPrice = 0,
      totalItems = 0;
  
    cart.forEach((item) => {
      totalPrice += item.price * item.numberOfUnits;
      totalItems += item.numberOfUnits;
    });

    subtotalEl.innerHTML = `<h4>${item.Price}hello world</h4> <h4>${totalItems}</h4> <h4>${totalPrice.toFixed(2)}</h4>`;
    
}
// Render cart items
function renderCartItems(){
    cartItemsEl.innerHTML = ""; // clear the cart element
    cart.forEach((item) => {
        cartItemsEl.innerHTML += `
                        <img src="${item.ImgSrc}" alt="">
                        <h3>${item.Name}</h3>
                        <div class="total">
                            <span onclick="changeNumberOfUnits('plus', ${item.id})">+</span><h3>Qnt ${item.numberOfUnits}</h3><span onclick="changeNumberOfUnits('minus', ${item.id})">-</span>
                            <h4>${totalPrice}</h4>
                        </div>
        `;
    });
}



// Remove item from cart
function removeItemFromCart(id){
    cart = cart.filter((item)=> item.id !== id);

    updateCart();
}

// Change number of units for an item
function changeNumberOfUnits(action, id){
    cart = cart.map((item) => {
        let numberOfUnits = item.numberOfUnits;

        if(item.id === id){
            if(action === "minus" && numberOfUnits > 1){
                numberOfUnits--;
            }else if(action === "plus" && numberOfUnits < item.Instock){
                numberOfUnits++;
            }
        }
        return {
            ...item,
            numberOfUnits,
        };
    });

    updateCart();
}