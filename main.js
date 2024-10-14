const screen = document.getElementById('screen');
let firstValue = '';
let secondValue = '';
let operator = '';
let shouldResetScreen = false;

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (button.classList.contains('operator')) {
            handleOperator(value);
        } else if (button.classList.contains('equal')) {
            calculate();
        } else if (button.classList.contains('clear')) {
            clear();
        } else if (button.classList.contains('all-clear')) {
            allClear();
        } else {
            handleNumber(value);
        }
    });
});

function handleNumber(value) {
    if (screen.textContent === '0' || shouldResetScreen) {
        screen.textContent = value;
        shouldResetScreen = false;
    } else {
        screen.textContent += value;
    }
}

function handleOperator(op) {
    if (firstValue === '') {
        firstValue = screen.textContent;
    } else if (operator) {
        secondValue = screen.textContent;
        calculate();
    }
    operator = op;
    shouldResetScreen = true;
}

function calculate() {
    if (operator && secondValue === '') {
        secondValue = screen.textContent;
    }
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(secondValue);
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '×':
            result = num1 * num2;
            break;
        case '÷':
            if (num2 === 0) {
                alert("Tidak dapat membagi dengan nol!");
                return;
            }
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        default:
            return;
    }

    screen.textContent = result;
    firstValue = result;
    secondValue = '';
    operator = '';
    shouldResetScreen = true;
}

function clear() {
    screen.textContent = '0';
    shouldResetScreen = false;
}

function allClear() {
    firstValue = '';
    secondValue = '';
    operator = '';
    screen.textContent = '0';
    shouldResetScreen = false;
}
