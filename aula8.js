const prompt = require('prompt-sync')(); 
/*
let altura =Number(prompt('digite sua altura:'))
let peso =Number(prompt('digite seu peso'))
let imc = peso/(altura **2)
if(imc<18.5){
    console.log('abaixo do peso ideal')
}else if(imc >=25 && imc<25){
    console.log('peso ideal')
}else if(imc >= 25 && imc <30){
    console.log('sobrepeso')
}else{
    console.log('obesidade')
}

//verificar se o triangulo é equilatero ou escaleno
//receber o lado 1 
let lado1 = Number(prompt(`digite o valor do lado 1`))
let lado2 = Number(prompt(`digite o valor do lado 2`))
let lado3 = Number(prompt(`digite o valor do lado 3`))

//verificar se o triangulo é equilatero caso tenha todos os 
//lados iguais 
let eq = (lado1 == lado2) && (lado2 == lado3)
let es = (lado1 != lado2) && (lado2 != lado3) && (lado1 != lado3)

console.log(`triangulo equilatero ?` , `triangulo escaleno` , es)


let ladod1 =Number(prompt('digite o valor de um lado de um tirnagulo:'))
let ladod2 =Number(prompt('digite o valor de outro lado de um tirnagulo:'))
let ladod3 =Number(prompt('digite o valor de outro do outro lado de um tirnagulo:'))

if(ladod1== ladod2 && ladod2 == ladod3){
    console.log('seu tiangulo e equilatero')
}else if(ladod1 != ladod2 && ladod2 != ladod3 && ladod1 != ladod3)
    {console.log('seu tiangulo e escaleno')

    }else{
        console.log('triangulo e isosceles');
       
    }

//descobrir a quantidade de horas trabalhadas
let horas = Number(prompt(`total de horas trabalhadas`))
let vendas = Number(prompt(`total de vendas`))

//validar se uma das condições foi atendida 
//(mais de 5000 em vendas ou mais de 40 horas trabalhadas)
if(vendas > 5000 || horas > 40){
    console.log("tem direito ao bonus")
}else{
    console.log("nao tem direito ao bonus")
}
*/

//crie um algoritmo que receba um caractere e verifique se ele é 
//uma vogal ou uma consoante
let letra = Number(prompt(`digite uma letra:`))
//sinal lógico do "OU" = ||
//sinal lógico do "E" = &&

if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
    console.log(`a letra ${letra} é uma vogal`)
}
else{
    console.log(`a letra ${letra} é uma consoante`)
}








