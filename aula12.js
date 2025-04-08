//criando nosso primeiro FOR 

for(let i = 0; i < 100; i++){
    console.log(i)
}
const prompt = require(`prompt-sync`)()
//entregando os notebooks por ordem 
console.log("entregando notebooks")

for(let nr = 1; nr <= 32; nr++){
    let nome = prompt(`quem é o numero ${nr}`)
    let presente = prompt(`O(A) ${nome} veio para escola?(S ou N)`)

    if(presente == `S`){
        console.log(`pegar notebook ${nr}`)
        console.log(`pegar o mouse  ${nr}`)
        console.log(`pegar o fonte ${nr}`)
        console.log(`levar notebook ate  ${nr}`)
    }
    else{
        console.log(`nao pegar notebook ${nr}`)
    }
}