const prompt = require('prompt-sync')();
//Crie uma lista de filmes com 7 filmes e faça as seguintes operações com ela

let filmes = ['Procurando Nemo','Moana' , 'Gente Grande' , 'A forja' , 'Sua culpa' , 'Matilda' , 'Divertidamente']
//exibir primeiro filme da lista
console.log(filmes[0])
//exibir o 4 filme
console.log(filmes[4])
// filmes.splice(`Divertidamente`)
console.log(filmes)
filmes.push(`Para todos os garotos que ja amei`)
console.log(filmes)
filmes.splice(5 , 0 , 'Barraca do beijo')
console.log(filmes)
//excluir primeiro filme da lista e exiba
filmes.shift()
console.log(filmes)
//exclua o ultimo Filme
filmes.pop()
console.log(filmes)
//exiba os 3 primeiros filmes
console.log(filmes.slice(0,2))
//exiba os 4 ultimos filmes
console.log(filmes.slice(4,7))
//exiba quantidade de filmes atualmente
console.log(filmes.length)
//ordem decrescente
filmes.reverse()
console.log(filmes)




