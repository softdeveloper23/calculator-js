// Calculator Program

const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value); // Warning: eval() is dangerous
    }
    catch {
        display.value = 'Error';
    }
}