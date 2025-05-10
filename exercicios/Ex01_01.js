const prompt = require('prompt-sync') ()

//ler dois numeros 
let nr1 = Number(prompt("digite um numero:"))
let nr2 = parseFloat(prompt("digite um numero:"))
//calcular soma
let soma = nr1 + nr2
console.log(`a soma entre ${nr1} + ${nr2} é igual: ${soma}`)