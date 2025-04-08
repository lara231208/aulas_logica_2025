const prompt = require('prompt-sync')()

//Peça ao usuário para digitar 2 notas e calcule sua média
let nota1 = (prompt(`digite sua nota1: `))
let nota2 = (prompt(`digite sua nota2: `))
//calcule sua media 
let media = (nota1 + nota2)/ 2
//considere a média acima de 7 aprovado, entre 5 e 7, em recuperação, abaixo de 5 reprovado.
if(media > 7){
    console.log(`voce esta aprovada`)
}
else if(media <= 5 && media <= 7){
    console.log(`voce esta em recuperação`)
}
else if(media <5){
    console.log(`voce esta reprovada`)
}
        
