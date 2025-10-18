function calculateTotal() {
    var subtotal = document.getElementById("subtotal").value;
    var tipPercent = document.getElementById("tipPercent").value;

    var subtotalNum = parseFloat(subtotal);
    var tipNum = parseFloat(tipPercent);

    var tipAmount = (subtotalNum * tipNum) / 100;
    var total = subtotalNum + tipAmount;

    document.getElementById("result").innerHTML = 
        "Tip amount: $" + tipAmount.toFixed(2) + "<br>Total amount to pay: $" + total.toFixed(2);
}