let number1;
let number2;
let operator;
let result;
const numberButtons = document.querySelector("#numberButtons");
const operatorButtons = document.querySelector("#operatorButtons");
const calculate = document.querySelector("#calculate");

function operate(number1, operator, number2) {
    console.log(`inside operate, number1 is ${number1}`);
    console.log(`inside operate, operator is ${operator}`);
    console.log(`inside operate, number2 is ${number2}`);
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
    console.log(result);
    return result;
};

function assignNumber (click) {
    if (number1 == undefined) {
        number1 = Number(click.target.innerHTML);
    }
    else if (number2 ==undefined) {
        number2 = Number(click.target.innerHTML);
    }
    console.log({number1});
    console.log({number2});
};

function assignOperator (click) {
    if (operator == undefined) {
        operator = click.target.innerHTML;
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
