/*
  Nesse desafio, você irá solicitar ao usuário que 
  ele insira dois números e, a partir daí, calcular:

  - A soma A soma dos dois números;
  - A subtração dos dois números;
  - A multiplicação dos dois números;
  - A divisão dos dois números;
  - O resto da divisão dos dois números;

  além disso

  - Verifique se a soma dos dois números é par (ou ímpar);
  - Verifique se os dois números inseridos são iguais (ou diferentes).

  apos isso mostrar o resutados um por um.
*/

alert(`
  Olá está aplicação e fara algumas operações matematicas e
  outras verificações. Aperte o OK para continuarmos.
`)
let numberOne = prompt("Digite o primeiro nummero:")
let numberTwo = prompt("Digite o segundo numero:")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const multi = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo
const areNumbersEqual = numberOne === numberTwo
const isSumEven = (sum%2) === 0

alert("A soma dos dois numeros é: " + sum)
alert("A subtração dos dois numeros é: " + sub)
alert("A multiplicação dos dois numeros é: " + multi)
alert("A divisão dos dois numeros é: " + div)
alert("O resto da divisão dos dois numeros é: " + restDiv)

if(isSumEven){
  alert("A soma dos dois números é par: " + sum)
} else {
  alert("A soma dos dois números é ímpar " + sum)
}

if(areNumbersEqual){
  alert("Os numero inserido são iguais.")
} else {
  alert("Os numero inserido são diferentes.")
}