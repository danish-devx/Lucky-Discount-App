function calculateDiscount() {

  let priceInput = document.getElementById("priceInput").value;

  let productPrice = Number(priceInput);

  if (isNaN(productPrice) || productPrice <= 0) {
    document.getElementById("result").innerHTML = "Please enter valid price!";
    return;
  }

  
  let randomDiscount = Math.floor(Math.random() * (30 - 10 + 1)) + 10;

  let discountAmount = productPrice * randomDiscount / 100;

  let finalPrice = productPrice - discountAmount;

  finalPrice = Number(finalPrice.toFixed(2));

  document.getElementById("result").innerHTML =
    "Discount: " + randomDiscount + "% <br>" +
    "Final Price: " + finalPrice;
}


function clearAll() {
    document.getElementById("priceInput").value = "";
    document.getElementById("result").innerHTML = "";
}