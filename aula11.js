//trabalhando com laços de repetição(while)

//executar o laço x vezes

let contador = 1 

//irá repetir enquanto a condição for verdadeira
//ou seja sera verdade enquanto o contador for menor ou igual a 5 
while(contador <= 5 ){
    console.log(`o contador é ${contador}`)
    //incrementando a variavel ou seja adicionado valor a ela
    //para que continue o processo ate que a condução seja atingida 
    contador = contador + 1 
}

console.log("fim")

const prompt = require(`prompt-sync`)()
/*
let senha_senai = `123456`

while(true){
    let senha = prompt(`digite a senha:`)
    if(senha_senai == senha){
        console.log(`voce hackeou a senha miserável`)
        break
    }else if(senha == `desisto`){
        break
    }
}

//escreva um programa que recebe o valor de vários produtos 
// ate que eu digite 0
// e exiba no final a soma da minha compra e a quantidade de produtos lidos 

let soma = 0;
let quantidade = 0;
let encerrar =""
while (encerrar != "SUB-TOTAL") {
    let valor = Number(prompt('digite o valor do produto: '));

        soma = soma + valor;
        quantidade++;
        encerrar = prompt("Deseja continuar: (digite SUB-TOTAL) ")
}

console.log(`Foram informados ${quantidade}`);
//ToFixed e para colocar somente dois numeros apos a virgula
console.log(`Valor total do produtos ${soma.toFixed(2)}`);
*/

//crie um jogo adivinhação de numeros

console.log("####################################");
console.log("❤️     JOGO DA ADVINHAÇÃO     ❤️");
console.log("####################################");

let nrSorteado = Math.floor(Math.random() * 100 + 1); //gera um numero aleatorio
let acertou = false;

while (!acertou) {
    const chute = parseInt(prompt('❤️ digite um numero entre 1 a 100: '))
    if(chute > nrSorteado){
        console.log(`Você chutou ${chute}, tente um numero menor`);
       
    }else if(chute < nrSorteado){
        console.log(`Você chutou ${chute}, tente um numero maior`)
     
}else if(chute == nrSorteado){
        console.log(`Você chutou ${chute}, você acertou miseravi`);
        acertou = true
    }
}

console.log('FIM');