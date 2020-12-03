let line = gets().split(' ');
let Tempo = parseInt(line[0]);
let velocidade = parseInt(line[1]);
let mcombustivel = (Tempo * velocidade / 12).toFixed(3);

 console.log(mcombustivel);