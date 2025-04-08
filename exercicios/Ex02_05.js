const prompt = require('prompt-sync') ()

//veja o ano de nascimento 
let anoNasc = Number(prompt(`digite seu ano de nascimento:`))
//verificar se o ano menos 2025 é maior ou menor que 18

if( 2025 - anoNasc >= 18){
    console.log(`voce é maior de idade`)
    }else{
        console.log(`voce é menor de idade`)
    }
    
    