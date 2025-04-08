const prompt = require(`prompt-sync`)()
//Receba 5 números e verifique a soma e a quantidade de todos os pares e ímpares digitados

somaPar = 0 
somaImpar = 0
qtdPar = 0
qtdImpar = 0
let entrada = 0
for(let i = 0; i <= 5; i++){
    console.log(Number(prompt("digite um numero")))
    if(entrada % 2 == 0){
        somaPar += entrada
        qtdPar++
    }
    else{
        somaImpar += entrada
        qtdImpar++
    }
}

console.log(`a soma de ${qtdPar} é ${somaPar}`)
console.log(`a soma de ${qtdImpar} é ${somaImpar}`)