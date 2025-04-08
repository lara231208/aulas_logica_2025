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
//usando o parseInt ou parseFloat converte os valores recebidos 
//que vem como string para int ou float 
idade = parseInt(prompt("qual é sua idade:"))
peso = parseFloat (prompt('qual seu peso?'))

console.log(`Seu nome é ${nome}, voce tem ${idade} e pesa ${peso}`)
//valida o tipo da variavel
console.log(typeof(idade))
console.log(typeof(peso))
//apos a conversao dos valores é possivel realizar 
//calculos matematicos 
console.log(idade + peso)

//exercicios de variaveis e entrada de dados 
//criar 4 variaveis nomeAluno, altura, escola, ano  
let nomeAluno = "Lara"
let altura = 1.72
let escola = "Sesi"
let ano = "2º ensino Médio"
//exibir os valores das variaveis 
console.log (`a aluna ${nomeAluno} tem ${altura}, estuda na escola ${escola} e esta no ${ano}`)

//2 crie 3 variaveis e atribuia valores
let nomeProfessor = "Ricardo"
let materia = "senai"
let anoIngresso = 2022
//exibir valores das variaveis
console.log (`o professor ${nomeProfessor} que leciona a matematica ${materia} no ${ano} e ingressou na ${escola} no ano de ${ anoIngresso}`)



    

    