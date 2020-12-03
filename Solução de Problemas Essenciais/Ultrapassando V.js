// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
let R = parseInt(gets());
let V = parseInt(gets());
let T =R;
let i = 1;

while (R >= V){
  V = parseInt(gets());
  
}

while (T <= V){
  
  T += (R+i);
  
  i++;
}

console.log(i);