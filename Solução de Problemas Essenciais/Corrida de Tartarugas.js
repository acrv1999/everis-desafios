let qtdT = gets().split(" ");
let veloc = gets().split(" ");

let qtdT2 = gets().split(" ");
let veloc2 = gets().split(" ");

let qtdT3 = gets().split(" ");
let veloc3 = gets().split(" ");

function printVelocMax(veloc) {
  if (veloc < 10) {
    console.log(1);
  }
  if (veloc >= 10 && veloc < 20) {
    console.log(2);
  }
  if (veloc >= 20) {
    console.log(3);
  }
}

veloc.sort((current, next) => next - current);
printVelocMax(veloc[0]);

veloc2.sort((current, next) => next - current);
printVelocMax(veloc2[0]);

veloc3.sort((current, next) => next - current);
printVelocMax(veloc3[0]);