const billButton = document.querySelector('#bill-button');
const detailList = document.querySelector('#detail-list');
const remainder = document.querySelector('#span2');
const billInput = document.querySelector('#bill-input');
const tip10 = document.querySelector('#span10');
const tip12 = document.querySelector('#span12');
const tip15 = document.querySelector('#span15');
const tips = document.querySelector('.tips');
const tippedBill = document.querySelector("#tipped-bill")

//Function to add value of bill to appplication
function addBill () {
    remainder.innerText = billInput.value;

    tip10.innerText = Math.floor(billInput.value * 0.1);
    tip12.innerText = Math.floor(billInput.value * 0.12);
    tip15.innerText = Math.floor(billInput.value * 0.15);
}
billButton.addEventListener('click', addBill);



function billTotal(tipPercentage) {
    const billAmount = parseFloat(remainder.innerText); // Get the bill amount
    const tipAmount = parseFloat(tipPercentage.innerText); // Get the selected tip amount
    tippedBill.innerText = (billAmount + tipAmount).toFixed(2); // Calculate and display the total
}

// Assign event listeners for each tip percentage
tip10.onclick = () => billTotal(tip10);
tip12.onclick = () => billTotal(tip12);
tip15.onclick = () => billTotal(tip15);




