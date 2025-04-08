const prompt = require(`prompt-sync`)()

let horas = Number(prompt(`quehoras são agora?`))
if(horas >= 5 && horas <= 11){
    console.log(`Bom diaa`)
}else if(horas = 12 && horas <= 11){
    console.log(`Boa tarde`)
}else if(horas = 18 && horas <= 23){
    console.log(`Boa noitee, bora jantar`)
}else
 {console.log(`bora madrugar`)}