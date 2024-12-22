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
            reset();
            break;
        case "÷":
        case "×":
        case "+":
        case "-":
            // Escolhe operações
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
            break;
        case ".":
            // Verificar se já tem um primeiro número digitado
            // Verificar se já existe um outro ponto
            break;
        case "=":
            // Exibe o resultado da conta no display
            break;
        default:
            // Caso algo diferente seja digitado exibir o erro
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