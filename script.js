let number1 = 0;
let number2 = 0;
let operator;
let result;
const numberButtons = document.querySelector("#numberButtonsContainer");
const operatorButtons = document.querySelector("#operatorButtons");
const dotButton = document.querySelector("#dot");
const calculate = document.querySelector("#calculate");
const display = document.querySelector("#display");
const clear = document.querySelector("#clear");
const backspace = document.querySelector("#backspace");

function operate(number1, operator, number2) {
    switch (operator) {
        case "+":
            result = Number(number1) + Number(number2);
            break;
        case "-":
            result = Number(number1) - Number(number2);
            break;
        case "*":
            result = Number(number1) * Number(number2);
            break;
        case "/":
            result = Number(number1) / Number(number2);
            break;
    }
    if (!Number.isInteger(result)) {
        const formatted = result.toFixed(2);
        display.innerText += "=" + formatted;
    }
    else {
        display.innerText += "=" + result;
    }

    return result;
};

function assignNumber(numberValue) {
    if (operator == undefined) {
        number1 += numberValue;
        display.innerText += numberValue;
    }
    else {
        number2 += numberValue;
        display.innerText += numberValue;
    }
};

function assignDot(dot) {
    if (!number1.includes(".")) {
        number1 += ".";
        display.innerText += ".";
        dotButton.disabled = true;
    }
    else {
        number2 += ".";
        display.innerText += ".";
        dotButton.disabled = true;
    };
};

function assignOperator(click) {
    if (click.target.matches(".buttons")) {
        if (operator == undefined) {
            operator = click.target.innerHTML;
            display.innerText += operator;
            dotButton.disabled = false;
        }
        else if (!number1 == 0 && !number2 == 0) {
            operate(number1, operator, number2);
            number1 = result;
            number2 = 0;
            operator = click.target.innerHTML;
            display.innerText += operator;
        }
    }
};

numberButtons.addEventListener("click", (click) => {
    if (click.target.matches(".numberButtons")) {
        assignNumber(click.target.innerHTML);
    };
});
dotButton.addEventListener("click", (click) => {
    if (click.target.matches("#dot")) {
        assignDot(click.target.innerHTML);
    }
});

operatorButtons.addEventListener("click", assignOperator);
clear.addEventListener("click", () => {
    display.innerText = "";
    number1 = 0;
    number2 = 0;
    operator = undefined;
});
calculate.addEventListener("click", () => {
    if (number1 == 0 || number2 == 0 || operator == undefined) {
        alert("Please complete your equation before trying to calculate")
    }
    else {
        operate(number1, operator, number2);
        number1 = 0;
        number2 = 0;
        operator = undefined;
    }
});

backspace.addEventListener("click", () => {
// found a bug here after multi calcs, handle later
    display.innerText = display.innerText.slice(0, -1);
    if (number2 == 0) {
        number1 = number1.slice(0, -1);
    }
    else {
        number2 = number2.slice(0, -1);
    }
});
