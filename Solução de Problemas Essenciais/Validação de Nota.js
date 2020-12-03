let n1 = parseFloat(gets());

while (n1 > 10 || n1 < 0 ) {
  console.log('nota invalida');
  n1 = parseFloat (gets());
}

let n2 = parseFloat(gets());

while (n2 > 10 || n2 < 0 ) {
  console.log('nota invalida');
  n2 = parseFloat (gets());
}

let m = (n1 + n2)/2 ; 

console.log("media = " + m.toFixed(2));