const prompt = require('prompt-sync') ()

//operação com variaveis 
let nr1 = (prompt("digite um numero?"))
let nr2 = (prompt("digite um numero?"))
let soma = nr1 + nr2
console.log(`a soma entre ${nr1} + ${nr2} é igual: ${soma}`)

//subtração

let subtracao = nr1 - nr2
console.log(`a subtração entre ${nr1} - ${nr2} é igual: ${subtracao}`)

//divisão

let divisao = nr1 / nr2 
console.log(`a divisão entre ${nr1} / ${nr2} é igual: ${divisao}`)

//multiplicação

let multiplicacao = nr1 * nr2 
console.log(`a multipicacao entre ${nr1} * ${nr2} é igual: ${multiplicacao}`)

//exponenciação

let exponenciacao = nr1 ** nr2
console.log(`a exponenciacao entre ${nr1} ** ${nr2} é igual: ${exponenciacao}`)

//calculando o valor do celular com desconto 
let valor = Number(prompt(`digite o preço do celular:`))
let desconto = Number(prompt(`digite o preço do desconto:`))

valor = valor - desconto 
console.log(`o valor do celular com desconto é R$${valor}`)

//calculando o dobro e a metade de um algoritmo 
//passo 1 
let nr = Number(prompt(`digite um numero`))
//passo 2 
let dobro = numero * 2
//passo 3 
let metade = numero / 2 
//passo4 
console.log(`o dobro de ${numero} é ${dobro} e a metade é ${metade}`)

//calculando
let horas_por_dia = 8 
let dias_totais = 15
let horas_trabalho = horas_por_dia * dias_totais 
let custo_hora = 100
let custo_total = horas_trabalho * custo_hora

//exibir
console.log(custo_total)

