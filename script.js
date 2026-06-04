let number1 = "";
let number2 = "";
let operator;
let result;
const numberList = "0123456789";
const operatorList = "+-*/";
const numberButtons = document.querySelector("#numberButtonsContainer");
const operatorButtons = document.querySelector("#operatorButtons");
const dotButton = document.querySelector("#dot");
const calculate = document.querySelector("#calculate");
const display = document.querySelector("#display");
const clear = document.querySelector("#clear");
const backspace = document.querySelector("#backspace");

function operate(number1, operator, number2) {
    if (number1 == 0 || number2 == 0 || operator == undefined) {
        alert("Please complete your equation before trying to calculate")
    }
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
    if (operator == undefined) {
        if (!number1.includes(".")) {
            number1 += ".";
            display.innerText += ".";
            dotButton.disabled = true;
        };
    }
    else if (!number2.includes(".")) {
        number2 += ".";
        display.innerText += ".";
        dotButton.disabled = true;
    };
};

function assignOperator(operatorValue) {
    if (operator == undefined) {
        operator = operatorValue;
        display.innerText += operatorValue;
        dotButton.disabled = false;
    }
    else if (!number1 == 0 && !number2 == 0) {
        operate(number1, operator, number2);
        number1 = result.toString();
        number2 = 0;
        operator = operatorValue;
        display.innerText += operatorValue;
        dotButton.disabled = false;
    };
};

function resetVars() {
    number1 = 0;
    number2 = 0;
    operator = undefined;
    dotButton.disabled = false;
};

numberButtons.addEventListener("click", (click) => {
    if (click.target.matches(".numberButtons")) {
        assignNumber(click.target.innerHTML);
    };
});

document.addEventListener("keydown", (event) => {
    if (numberList.includes(event.key)) {
        assignNumber(event.key);
};
});

dotButton.addEventListener("click", (click) => {
    if (click.target.matches("#dot")) {
        assignDot(click.target.innerHTML);
    };
});

document.addEventListener("keydown", (event) => {
    if (event.key == ".") {
        if (!number1.includes(".")) {
            assignDot(event.key);
        }
        else if (!number2.includes(".")) {
            assignDot(event.key);    
        }
    }
});

operatorButtons.addEventListener("click", (click) => {
    if (click.target.matches(".buttons")) {
        assignOperator(click.target.innerHTML);
    };
});

document.addEventListener("keydown", (event) => {
    if (operatorList.includes(event.key)) {
        assignOperator(event.key);
    };
});

calculate.addEventListener("click", () => {
        operate(number1, operator, number2);
        resetVars();
    }
);

document.addEventListener("keydown", (event) => {
    if (event.key == "=" || event.key == "Enter") {
        operate(number1, operator, number2);
        resetVars();
    };
});

clear.addEventListener("click", () => {
    display.innerText = "";
    resetVars();
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