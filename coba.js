console.log(Date.now())
console.log(Date.now())

function onPayment() {
    let total = 0;
    let ppn = 0.1;
    
    cart.forEach(function(item) {
      total += item.price * item.quantity;
    });
    
    total = total + (total * ppn);
    
    console.log("Total belanja (termasuk PPN): " + total);
  }
  
  // Contoh penggunaan
  const button = document.querySelector("button#pay");
  button.addEventListener("click", onPayment);
  