let line = gets().split(" ");
let A = parseInt(line[0]);
let B = parseInt(line[1]);
let q = 0;
let r = 0;
for (resto = 0; resto < Math.abs(B); resto++) {
    quoc = parseInt(((A - resto)/B).toFixed(0));
    if (A === (B * quoc) + resto ) {
      q = quoc;
      r = resto;
    }

}
console.log(q + ' ' +r);
