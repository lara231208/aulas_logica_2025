const prompt = require(`prompt-sync`)()

//exiba todos os numeros impares de 1 a 40
//montando estrutura do laço for 
//for (inicializador, condição, interação)
for(let i = 1; i <= 40; i ++){
    //if(i % 2 == 1 )
    if(i % 2 != 0 ){
        console.log(`${i} é impar `)
    }
}
