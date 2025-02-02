function calculateTip() {
    let bill = parseFloat(document.getElementById("billAmount").value);
    let tipPercent = parseFloat(document.getElementById("tipPercent").value);

    if (isNaN(bill) || isNaN(tipPercent)) {
        document.getElementById("totalAmount").innerText = "Enter valid numbers!";
        return;
    }

    let tip = bill * (tipPercent / 100);
    let total = bill + tip;

    document.getElementById("totalAmount").innerText = `Total: $${total.toFixed(2)}`;
}
