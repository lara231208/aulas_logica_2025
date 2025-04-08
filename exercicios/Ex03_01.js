const prompt = require('prompt-sync') ()

//Peça ao usuário para digitar um número de 1 a 7 e 
// imprime o dia da semana correspondente.
 let numero = Number(prompt(`digite um numero de 1 a 7`))

 if(numero == 1){
    console.log("domingo dia de ir na igreja ")
 }else if(numero == 2){
    console.log("segunda dia de senai")
 }
else if(numero == 3) {
    console.log("terça dia de senai")
}
else if(numero == 4){
    console.log("quarta")
}
else if(numero == 5){
    console.log("quinta dia de ver Rafael")
}
else if(numero == 6){
    console.log("sexta")
}
else if(numero == 7){
    console.log("sabado")
}




