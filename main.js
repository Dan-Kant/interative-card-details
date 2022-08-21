const displayCardNum = document.querySelector('.card-number');
const displayName = document.querySelector('.name');
const displayMonth = document.querySelector('.display-month');
const displayYear = document.querySelector('.display-year');
const displayCVC = document.querySelector('.back-number');
const cardHolderName = document.querySelector('.cardholder-name-input');
const cardNum = document.querySelector('.card-number-input');
const expiryMonth = document.querySelector('#month');
const expiryYear = document.querySelector('#year');
const cvc = document.querySelector('#cvc');
const thankYouMessage = document.querySelector('.thank-you-message');
const confirmBtn = document.querySelector('.confirm');
const continueBtn = document.querySelector('.continue');

function inputName() {
    displayName.innerHTML = cardHolderName.value;
    if (displayName.innerHTML == "") {
        displayName.innerHTML = cardHolderName.placeholder;
    }
};

function inputCardNum() {
    let cardNumberInput = cardNum.value;
    let formattedCardNumber = cardNumberInput.replace(/[^\d]/g, "");
    formattedCardNumber = formattedCardNumber.substring(0, 16);
    let cardNumberSections = formattedCardNumber.match(/\d{1,4}/g);

    if (cardNumberSections !== null) {
        formattedCardNumber = cardNumberSections.join(" ");
    }

    if (cardNumberInput !== formattedCardNumber) {
        cardNum.value = formattedCardNumber;
    }
    displayCardNum.innerHTML = cardNum.value;
    if (cardNum.value === "") {
        displayCardNum.innerHTML = cardNum.placeholder;
    }
};

function inputMonth() {
    let formattedMonth = expiryMonth.value;
    formattedMonth = formattedMonth.substring(0, 2);
    expiryMonth.value = formattedMonth;
    if (expiryMonth.value === "") {
        displayMonth.innerHTML = "00";
    } 
    else {
        displayMonth.innerHTML = expiryMonth.value; 
    }
}

function inputYear() {
    let formattedYear = expiryYear.value;
    formattedYear = formattedYear.substring(0, 4);
    expiryYear.value = formattedYear;
    if (expiryYear.value === "") {
        displayYear.innerHTML = "0000";
    } 
    else {
        displayYear.innerHTML = expiryYear.value; 
    }
};

function inputCvc() {
    let formattedCvc = cvc.value;
    formattedCvc = formattedCvc.substring(0, 3);
    cvc.value = formattedCvc;
    if (cvc.value === "") {
        displayCVC.innerHTML = "000";
    }
    else {
        displayCVC.innerHTML = cvc.value;
    }
};

confirmBtn.addEventListener('click', (event) => {
    event.preventDefault();
    thankYouMessage.classList.add("reveal");
});

continueBtn.addEventListener('click', (event) => {
    event.preventDefault();
    displayName.innerHTML = "Jane Appleseed";
    displayCardNum.innerHTML = "0000 0000 0000 0000";
    displayMonth.innerHTML = "00";
    displayYear.innerHTML = "00";
    displayCVC.innerHTML = "000";
    cardHolderName.value = "";
    cardNum.value = "";
    expiryMonth.value = "";
    expiryYear.value = "";
    cvc.value = "";
    thankYouMessage.classList.add("hide");
});