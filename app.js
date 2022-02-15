function getPin () {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        const displayPin = document.getElementById('display-input');
        displayPin.value = pin;
    } else {
        return getPin();
    }
}

function collectUserPin(event) {
    const userInput = document.getElementById('user-input');
    const userPin = event.target.innerText;
    const previousNumber = userInput.value;
    if (isNaN(userPin)) {
        if (userPin == 'C') {
            userInput.value = '';
        }
    } else {
        userInput.value = previousNumber + userPin;
    }
}

function verifyPin() {
    const generatedPin = document.getElementById('display-input').value;
    const userPin = document.getElementById('user-input').value;
    const success = document.getElementById('notify-success');
    const failed = document.getElementById('notify-failed');
    if(generatedPin == userPin) {
        success.style.display = 'block';
        failed.style.display = 'none';
    } else {
        success.style.display = 'none';
        failed.style.display = 'block';
    }
}

const generatePin = document.getElementById('generate-pin');
const calcBody = document.getElementById('calc-body');
const submitBtn = document.getElementById('submit-btn');

generatePin.addEventListener('click', getPin);
calcBody.addEventListener('click', collectUserPin);
submitBtn.addEventListener('click', verifyPin);