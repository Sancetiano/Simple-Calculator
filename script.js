let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');
let displayValue = '';

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;
        if (buttonText === 'AC') {
            displayValue = '';
            display.value = displayValue;
        } 
        else if (buttonText === '^2') {
            displayValue = displayValue*displayValue;
            display.value = displayValue;
        }
        else if (buttonText === '=') {
            display.value = eval(displayValue);
        } else if (buttonText === 'DEL') {
            displayValue = displayValue.substring(0, displayValue.length - 1);
            display.value = displayValue;

        }
        else {
            displayValue += buttonText;
            display.value = displayValue;
        }
    });
});