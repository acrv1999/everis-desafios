let n = parseInt(gets())
let list = gets().split(' ')
cont = [0,0,0,0]

for(let i = 0; i < n; i++){
 if(parseInt(list[i]) % 2 == 0){
   cont[0]++}
 if(parseInt(list[i]) % 3 == 0){
  cont[1]++}
  if(parseInt(list[i]) % 4 == 0){
    cont[2]++}
  if(parseInt(list[i]) % 5 == 0){
    cont[3]++}
}

console.log(cont[0] + ' Multiplo(s) de 2')
console.log(cont[1] + ' Multiplo(s) de 3')
console.log(cont[2] + ' Multiplo(s) de 4')
console.log(cont[3] + ' Multiplo(s) de 5')