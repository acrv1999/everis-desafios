let x = gets().split(" ")

let h = parseFloat(x[0]);
let p = parseFloat(x[1]);

let total = parseFloat(h/p).toFixed(2);

console.log(total);