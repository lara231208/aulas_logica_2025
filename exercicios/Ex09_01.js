//crie uma função 

function FormatarData(dia , mes , ano){
    let data = `${dia}/${mes}/${ano}`
    return data 
}

let valorRetornado = FormatarData('23' , '12', '2008')
console.log(valorRetornado)