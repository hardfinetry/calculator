let number1 = 0;
let number2 = 0;
let operator = "";

function operate(number1, operator, number2) {
    if (operator == "+") {
        return(number1 + number2);
    }
    else if (operator == "-") {
        return(number1 - number2);
    }
    else if (operator == "*") {
        return(number1 * number2);
    }
    else if (operator == "/") {
        return(number1 / number2);
    };
};