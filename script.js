let number1;
let number2;
let operator;
let result;
const numberButtons = document.querySelector("#numberButtons");
const operatorButtons = document.querySelector("#operatorButtons");
const calculate = document.querySelector("#calculate");
const display = document.querySelector("#display");

function operate(number1, operator, number2) {
    switch (operator) {
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "/":
            result = number1 / number2;
            break;
    }
    display.innerText += "=" + result;
    return result;
};

function assignNumber (click) {
    if (number1 == undefined) {
        number1 = Number(click.target.innerHTML);
        display.innerText = number1;
    }
    else if (number2 ==undefined) {
        number2 = Number(click.target.innerHTML);
        display.innerText += number2;
    }
};

function assignOperator (click) {
    if (operator == undefined) {
        operator = click.target.innerHTML;
        display.innerText += operator;
    }
    console.log({operator});
};

numberButtons.addEventListener("click", assignNumber);
operatorButtons.addEventListener("click", assignOperator);
calculate.addEventListener("click", () => {
    operate(number1, operator, number2);
    number1 = undefined;
    number2 = undefined;
    operator = undefined;
});
