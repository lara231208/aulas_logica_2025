//Faça um programa que receba um número e mostre seu fatorial. Ex. :
//5! = 5 * 4 * 3 * 2 * 1 = 120

const prompt = require(`prompt-sync`)()

let numero = parseInt(prompt("digite um numero"))

let fatorial = 1 
let i = numero 
let sequencia = numero  + "! =" //concatenando valores 

while(i >= 1 ){
    fatorial = fatorial * i
    sequencia = sequencia + 1 
    if(i > 1 ){
        sequencia = sequencia + ` * `
    }
    i-- //decrementando contador 
}

sequencia = sequencia  + " = " + fatorial
console.log(sequencia)