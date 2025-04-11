let resultField = document.getElementById('result');
let mode = 'rad'; // Default mode is radians

function appendValue(value) {
    resultField.value += value;
}

function clearResult() {
    resultField.value = '';
}

function calculateResult() {
    try {
        resultField.value = eval(resultField.value);
    } catch (error) {
        alert('Invalid calculation');
        clearResult();
    }
}

function calculateSquare() {
    try {
        resultField.value = Math.pow(parseFloat(resultField.value), 2);
    } catch (error) {
        alert('Invalid input for square calculation');
        clearResult();
    }
}

function calculateFactorial() {
    try {
        let num = parseInt(resultField.value);
        if (num < 0) throw new Error('Factorial of negative number is undefined');
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
        resultField.value = factorial;
    } catch (error) {
        alert('Invalid input for factorial');
        clearResult();
    }
}

function calculateTrig(func) {
    try {
        let value = parseFloat(resultField.value);
        if (mode === 'deg') value = (value * Math.PI) / 180; // Convert to radians if in degree mode
        switch (func) {
            case 'sin':
                resultField.value = Math.sin(value);
                break;
            case 'cos':
                resultField.value = Math.cos(value);
                break;
            case 'tan':
                resultField.value = Math.tan(value);
                break;
        }
    } catch (error) {
        alert('Invalid input for trigonometric function');
        clearResult();
    }
}

function calculateLog(type) {
    try {
        let value = parseFloat(resultField.value);
        if (type === 'ln') {
            resultField.value = Math.log(value); // Natural log
        } else if (type === 'log') {
            resultField.value = Math.log10(value); // Base-10 log
        }
    } catch (error) {
        alert('Invalid input for logarithm');
        clearResult();
    }
}

function calculateSquareRoot() {
    try {
        let value = parseFloat(resultField.value);
        if (value < 0) throw new Error('Square root of negative number is undefined');
        resultField.value = Math.sqrt(value);
    } catch (error) {
        alert('Invalid input for square root');
        clearResult();
    }
}

function calculatePower() {
    try {
        let values = resultField.value.split('^');
        if (values.length !== 2) throw new Error('Invalid input for power calculation');
        let base = parseFloat(values[0]);
        let exponent = parseFloat(values[1]);
        resultField.value = Math.pow(base, exponent);
    } catch (error) {
        alert('Invalid input for power calculation');
        clearResult();
    }
}

function setMode(newMode) {
    mode = newMode;
    alert(`Mode set to ${mode.toUpperCase()}`);
}