const prompt = require('prompt-sync')();

//ler um numero
let numero = Number(prompt('digite um numero:'));
//mostrar os valores 
console.log(`o dobro de ${numero} é ${numero * 2}`)
console.log(`o triplo de ${numero} é ${numero * 3}`)
console.log(`o valor de ${numero}  ${numero ** 3}`)