let form = document.getElementById('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let number1 = +document.getElementById('number1').value;
    let number2 = +document.getElementById('number2').value;
    let symbol = document.getElementById('symbol').value;

    let result;
    if (symbol === '+') {
        result = number1 + number2;
    } else if (symbol === '-') {
        result = number1 - number2;
    } else if (symbol === '*') {
        result = number1 * number2;
    } else if (symbol === '/') {
        result = number1 / number2;
    } else {
        alert('Неправильно введённый символ операции');
    }

    let output = document.getElementById('output');
    output.innerText = `${number1} ${symbol} ${number2} = ${result}`;
});