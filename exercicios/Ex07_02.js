const prompt = require('prompt-sync')();
// 20 times
let times = ['Corinthians' , 'Palmeiras' , 'Flamengo' , 'São Paulo' , 'Vasco da Gama ', 'Fluminense' , 'Internacional' , 'Gremio' , 'Atlantico Mineiro' , 'Cruzeiro', 'Bahia' , 'Santos' , 'Bota fogo' , 'Athletico Paranaense' , 'Sport Recife', 'Guarani' , 'Bangu' , 'Vitória' , 'Ceará' , 'Fortaleza']
// exiba 1 time como CAMPEÃO
console.log(`o time campeão foi o: ${times[0]}`)
//Exiba os 4 primeiros times como que irão jogar a libertadores
console.log(times.slice(0,3))
//Exiba os 4 últimos times como os que estão rebaixados para a série B
console.log(times.slice(16,20))