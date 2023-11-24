// Declaring variables
let amountInput = document.getElementById('amountInput');
let rateInput = document.getElementById('rateInput');
let yearsInput = document.getElementById('yearsInput');
let interestOutput = document.getElementById('interestOutput');
let calButton = document.getElementById('calButton');

calButton.addEventListener('click', calculateSimpleInterest);

//creating a function, allowing numbers to have decimals
function calculateSimpleInterest() {
    let amount = parseFloat(amountInput.value);
    let rate = parseFloat(rateInput.value);
    let years = parseFloat(yearsInput.value);

    //calculating the interest
    if (!isNaN(amount) && !isNaN(rate) && !isNaN(years)) {
        let interest = (amount * rate * years) / 100;
        interestOutput.value = interest.toFixed(2); 
    } else {
        alert('Please input valid numbers');
    }
}