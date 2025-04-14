let frutas = [`Maça` , `Banana` , `Uva` , `Abacaxi`]

//A variavel x serve para interaros valores ate o limite da lista 
//O nome não é obrigatoriamente ser o nome i , x ou contador
//pode ser qualquer nome de variavel 
for(let x = 0; x < frutas.length; x++){
    //O length identifica o tamanho total da lista
    console.log(`A fruta é ${frutas[x]}`)
}

let listaNomes = [`Bill Gates` , `Lara Hara` , `Raul Seixas` , `Pietra`]
//para cada nome da lista nomes, escreva um nome
for(let nome of istaNomes){
    console.log(nome)
}

//verificando se é uma consoante 
//lista de vogais 
const prompt = require(`prompt-sync`)()
let vogais = ['a' , 'e' , 'i' , 'o' , 'u']

let letra = prompt(`Digite uma letra: `)
//Se letra estiver incluso na lista de vogais, identifico que é uma vogal
if(vagais.includes(letra.toLowerCase())){
    console.log(`É uma vogal`)
}