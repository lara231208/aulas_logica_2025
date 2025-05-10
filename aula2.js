//importano a biblioteca para entrada de dados 
const prompt = require (`prompt-sync`)()

// Variaveis e constantes 
// passo 1 : receber o nome da pessoa 
let nome = "Ayrton"
// passo 2 : receber a idade da pessoa
let idade = 36  
// passo 3 : receber o peso da pessoa 
let peso = 76.5
// passo 4 : exibir o nome, a idade e o peso 
console.log (nome, idade, peso)

//receber e armazena o texto
let curso =   "desenvolvimento de sistemas"
// #tipo nome recebe  valor    na variavel 

//exibir o valor armazeado
console.log ("curso") //imprimo uma string (texto)
console.log (curso) //imprimi o valor que esta dentro da variavel 
console.log (curso, curso);

//criando e atribuindo valor a outras variedades 
let idade2 = 35 // valor do tipo int 
let temperatura = 23.5 // valor do tipo float
let nome2 = "lara"

console.log ("ola", nome2, "voce tem:", idade2,
     "e hoje esta fazendo", temperatura, "ºC")

//usando tempo 
console.log (`ola ${nome}, voce tem ${idade2}
    e hoje esta fazendo: ${temperatura} ºC
    `)

    let chovendo = false 
    let dia = true
// nas constantes nao podem ser reatribuidos novos valores 
    const PI = 3.1415
    console.log(PI)

    //utilizando prompt para receber dados 
 //entrada de dados 
 
 //no prompt sempre recebemos uma string
nome = prompt ('qual é seu nome?')



    