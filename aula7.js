//estruturas condicionais e operadores relacionais 
let a = 2
let b = 3

console.log(a == b) //relação de igualdade 
console.log(a != b) //relação de diferença 
console.log(a > b) //maior 
console.log(a >= b) //maior ou igual
console.log(a < b) //menor 
console.log(a <= b) //menor ou igual 

//estruturas condicionais 
let tenhoIgresso = false
if(tenhoIgresso == true){
    //bloco de codigo 
    console.log(`posso entrar!`) 
  }else{
    console.log(`estou barrado no baile`)
}
//validando
const prompt = require(`prompt-sync`)()
//receber o valor da idade 
let idade = Number(prompt(`qual sua idade?`))

//verificar se é maior ou igual a 18 
if(idade >= 18){
    console.log(`maior idade`)
    }

    //outro exemplo de estrutura condicional(if-else)
    idade = Number(prompt(`digite a idade`))
    //verificar se e maior que 18
    if(idade >= 18){
        console.log(`voce é maior de idade`)
}else{
    console.log(`voce e menor de idade`)
}


