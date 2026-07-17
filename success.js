const randomOrder = Math.floor(Math.random() * 900000) + 100000;

document.getElementById("order-number").textContent =
"Order No : #" + randomOrder;

// Cart Empty
localStorage.removeItem("cart");
const steps = [

document.getElementById("step1"),

document.getElementById("step2"),

document.getElementById("step3"),

document.getElementById("step4")

];

let current = 0;

setInterval(function(){

    if(current < steps.length-1){

        steps[current].classList.remove("active");

        current++;

        steps[current].classList.add("active");

    }

},5000);