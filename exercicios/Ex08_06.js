const prompt = require('prompt-sync')()
//Receba uma palavra do usuário e calcule quantas vogais há nesta palavra.

let vogais = ['a', 'e', 'i', 'o', 'u']
let palavra = prompt('Digite uma palavra: ')
let qtdvogal = 0
for(let letra of palavra){

if(vogais.includes(letra)){
    qtdVogal++
}
}


   