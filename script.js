let number1 = 0;
let number2 = 0;
let operator;
let result;
const numberButtons = document.querySelector("#numberButtons");
const operatorButtons = document.querySelector("#operatorButtons");
const calculate = document.querySelector("#calculate");
const display = document.querySelector("#display");
const clear = document.querySelector("#clear");

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
    display.innerText += "=" + result;
    return result;
};

function assignNumber(click) {
    if (click.target.matches(".buttons")) {
        if (operator == undefined) {
            number1 += click.target.innerHTML;
            display.innerText += click.target.innerHTML;
            console.log(click.target);
        }
        else {
            number2 += click.target.innerHTML;
            display.innerText += click.target.innerHTML;
        }
    }
};

function assignOperator(click) {
    if (click.target.matches(".buttons")) {
        if (operator == undefined) {
            operator = click.target.innerHTML;
            display.innerText += operator;
        }
    }
};

numberButtons.addEventListener("click", assignNumber);
operatorButtons.addEventListener("click", assignOperator);
clear.addEventListener("click", () => {
    display.innerText = "";
    number1 = 0;
    number2 = 0;
    operator = undefined;
})
calculate.addEventListener("click", () => {
    operate(number1, operator, number2);
    number1 = 0;
    number2 = 0;
    operator = undefined;
});
