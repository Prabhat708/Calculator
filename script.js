let displayValue = "";

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.getElementById('display').innerText = "0";
}

function calculate() {
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
        document.getElementById('display').innerText = displayValue;
    } catch (error) {
        displayValue = "";
        document.getElementById('display').innerText = "Error";
    }
}
function eraseOne() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').innerText = displayValue || "0";
}
function calculate() {
    try {
        let result;
        if (displayValue.includes('^')) {
            const operands = displayValue.split('^');
            const base = parseFloat(operands[0]);
            const exponent = parseFloat(operands[1]);
            result = Math.pow(base, exponent);
        } else if (displayValue.includes('%')) {
            const operands = displayValue.split('%');
            const num1 = parseFloat(operands[0]);
            const num2 = parseFloat(operands[1]);
            result = num1 % num2;
        } else {
            result = eval(displayValue);
        }
        displayValue = result.toString();
        document.getElementById('display').innerText = displayValue;
    } catch (error) {
        displayValue = "";
        document.getElementById('display').innerText = "Error";
    }
}
