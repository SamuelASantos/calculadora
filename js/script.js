let display = document.querySelector('#display');

let firstValue = '';
let secondValue = '';
let operator = '';
let currentValue = 1;

function reset() {
    firstValue = '';
    secondValue = '';
    operator = '';
    currentValue = 1;
}

function clicked(button) {
    switch (button) {
        case "c":
            // Limpa tudo
            let displayOn = document.getElementsByClassName("disable");
            for (let i = 0; i < displayOn.length; i++) {
                displayOn[i].disabled = false;
            }
            reset();
            break;
        case "÷":
        case "×":
        case "+":
        case "-":
            // Escolhe operações
            if (firstValue !== '') {
                operator = button;
                currentValue = 2;
            }
            break;
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            // Exibe os números
            if (currentValue === 1) {
                firstValue += button;
            }
            if (currentValue === 2) {
                secondValue += button;
            }
            break;
        case ".":
            // Verificar se já tem um primeiro número digitado e se já existe um outro ponto
            if (currentValue === 1 && firstValue != '' && !firstValue.includes('.')) {
                firstValue += button;
            }
            if (currentValue === 2 && secondValue != '' && !secondValue.includes('.')) {
                secondValue += button;
            }
            break;
        case "=":
            // Exibe o resultado da conta no display
            if (secondValue !== '' && currentValue === 2) {
                let result = calculate(firstValue, operator, secondValue);
                reset();
                firstValue = result;
            }
            break;
        default:
            // Caso algo diferente seja digitado exibir o erro
            alert('Erro. Digite um valor válido.')
            break;
    }

    updateDisplay();
}

function updateDisplay() {
    if (firstValue === '') {
        display.innerHTML = '0';
    } else {
        display.innerHTML = firstValue + operator + secondValue;
    }
}

function calculate(first, op, second) {
    first = parseFloat(first);
    second = parseFloat(second);

    switch (op) {
        case '÷':
            if (second === 0) {
                let displayOff = document.getElementsByClassName("disable");
                for (let i = 0; i < displayOff.length; i++) {
                    displayOff[i].disabled = true;
                }
                return 'Inválido'
            }
            return first / second;
        case '×':
            return first * second;
        case '+':
            return first + second;
        case '-':
            return first - second;
        default:
            return 0;
    }
}