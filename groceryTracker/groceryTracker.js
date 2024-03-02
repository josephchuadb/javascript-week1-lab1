let grocery1, grocery2, grocery3;

function groceryTracker() {
    grocery1 = parseFloat(document.getElementById('grocery-1').value);
    grocery2 = parseFloat(document.getElementById('grocery-2').value);
    grocery3 = parseFloat(document.getElementById('grocery-3').value);

    let total = grocery1 + grocery2 + grocery3;
    document.getElementById('result').innerText = `The total amount is: $ ${total}`;
}