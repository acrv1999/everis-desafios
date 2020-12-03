let e = gets() // Quantidade de números
let array = gets()
let values = array.replace(/\s/g,',').trim().split(',');
// .trim() - Remove espaços em brancos
// .replace() - altera o valor
// /\s/g - É uma expressão, onde \s significa "match whitespace"
// e 'g' é uma flag que significa "global"

let min = values[0]
let position = 0

for (let i = 0; i < e; i++){
  if(parseFloat(min) > parseFloat(values[i])){
    min = values[i]
    position = i
  }
}

console.log('Menor valor: ' + min)

console.log('Posicao: ' + position)