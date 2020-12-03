let joias = [];

while (true){
  let joia = gets();
  if (!joia){
    break;
  }
  let list = joias.find(j => j == joia)
  if(!list){
    joias.push(joia);
  }
}
console.log(joias.length);