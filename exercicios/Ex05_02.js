const prompt = require(`prompt-sync`)()

//exiba todos os numeros pares de 1 a 20

let i = 1 

while(i <= 20){
    if(i % 2 == 0){
        console.log(`${i} é par`)
    }
    i++
}