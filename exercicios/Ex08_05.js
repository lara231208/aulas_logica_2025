const prompt = require('prompt-sync')()
//Crie uma lista com 5 números aleatórios e exiba o nr e seu dobro.
let listaNrs = [4 , 6 , 8 , 10 , 12]
let soma = 0 
for(nr of listaNrs){
    soma = soma + nr / 2 
}
print(soma)