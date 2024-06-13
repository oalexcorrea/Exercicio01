let firstNumber = prompt('Digite o primeiro número')
let secondNumber = prompt('Digite o segundo número')

alert("Resultado da soma: " + (Number(firstNumber) + Number(secondNumber)))
alert("Resultado da subtração: " + (Number(firstNumber) - Number(secondNumber)))
alert("Resultado da multiplicação: " + (Number(firstNumber) * Number(secondNumber)))
alert("Resultado da divisão: " + (Number(firstNumber) / Number(secondNumber)))

if(firstNumber != secondNumber) {
  alert("Números inseridos são diferentes!")
} else {
  alert("Números inseridos são iguais")
}

if((firstNumber + secondNumber) % 2 == 0) {
  alert("A soma dos números é impar")
} else {
  alert("A soma dos números é par")
}

