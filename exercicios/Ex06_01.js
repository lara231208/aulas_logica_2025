const prompt = require(`prompt-sync`)()

//exiba todos os numeros impares de 1 a 40

let i = 1 

while(i <= 40){
    if(i % 2 == 0){
        console.log(`${i} é impar `)
    }
    i--
}
