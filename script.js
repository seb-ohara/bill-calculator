const billButton = document.querySelector('#bill-button');
const detailList = document.querySelector('#detail-list');
const remainder = document.querySelector('#span2');
const billInput = document.querySelector('#bill-input');
const tip10 = document.querySelector('#span10');
const tip12 = document.querySelector('#span12');
const tip15 = document.querySelector('#span15');

//Function to add value of bill to appplication
function addBill () {
    remainder.innerText = billInput.value;

    tip10.innerText = Math.floor(billInput.value * 0.1);
    tip12.innerText = Math.floor(billInput.value * 0.12);
    tip15.innerText = Math.floor(billInput.value * 0.15);
}
billButton.addEventListener('click', addBill);



