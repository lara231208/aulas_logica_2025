const prompt = require('prompt-sync') ()

//leia duas notas de um aluno
let nota = Number(prompt(`qual sua nota?`))
//verificar se é maior ou igual a 7
if(nota >= 7){
    console.log(`aprovado`)
    }
    
    nota = Number(prompt(`digite a nota`))
    //verificar se e menor que 7
    if(nota >= 7){
        console.log(`reprovado`)
}else{
    console.log(`reprovado `)
}