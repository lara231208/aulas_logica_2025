//Crie uma lista com as palavras "gato", "cachorro", "pássaro" e "peixe", e imprima cada
//palavra em maiúsculas.

const prompt = require('prompt-sync')()

let listaPalavra = ['Gato' , 'Cachorro' , 'Passáro' , 'Peixe']
for(let animal of listaPalavra){
    console.log(animal.toUpperCase())

}
