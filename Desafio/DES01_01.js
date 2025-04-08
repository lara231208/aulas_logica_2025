const prompt = require(`prompt-sync`)()

//Receba uma temperatura em graus celsius
let temperatura = Number(prompt(`digite uma temperatura `))
if(temperatura <= 15){
    console.log(`está frio`)
}else if(temperatura > 15){
    console.log(`boa pra ficar de love `)
}else if(temperatura <= 25){
    console.log(`temperatura agradável`)
}else if(temperatura >= 26){
    console.log(`quente`)
}else if(temperatura <= 35){
    console.log(`quente tambem `)
}else
    {console.log(`MUITO QUENTE `)}
