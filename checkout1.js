



const cart = JSON.parse(localStorage.getItem("cart")) || [];

console.log(cart);

const checkoutItems = document.getElementById("checkout-items");

const checkoutTotal = document.getElementById("checkout-total");

const finalTotal = document.getElementById("final-total");

let total = 0;

cart.forEach(function(item){

    total += item.price * item.qty;

    checkoutItems.innerHTML += `

    <div class="checkout-item">

        <h3>${item.name}</h3>

        <p>

        ${item.qty} × Rs.${item.price}

        </p>

    </div>

    <hr>

    `;

});

checkoutTotal.textContent = total;

finalTotal.textContent = total + 150;

const placeOrder = document.getElementById("place-order");

placeOrder.addEventListener("click", function(){
   alert("Place Order Clicked");
    const name = document.getElementById("customer-name").value.trim();

    const phone = document.getElementById("customer-phone").value.trim();

    const address = document.getElementById("customer-address").value.trim();

    if(name === "" || phone === "" || address === ""){

        alert("Please fill all required fields.");

        return;

    }

    localStorage.removeItem("cart");

  window.location.href = "success1.html";

// console.log("Redirecting...");
// window.location.href = "success1.html";

});

let discount = 0;

const applyPromo = document.getElementById("apply-promo");

applyPromo.addEventListener("click", function(){

    const code = document.getElementById("promo-code").value;

    if(code === "SAVE10"){

        discount = total * 0.10;

    }

    else if(code === "FREE50"){

        discount = 50;

    }

    else{

        alert("Invalid Promo Code");

        return;

    }

    document.getElementById("discount-text").textContent =
        "Discount : Rs." + discount;

    finalTotal.textContent = total + 150 - discount;

});