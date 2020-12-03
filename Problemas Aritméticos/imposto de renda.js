let line = gets().split(' ');
let salario = parseFloat(line[0]);
let imposto;
if (salario <= 2000.00) {
   imposto = 0.00;

} else if (salario <= 3000.00) {
   imposto = (salario - 2000.00) * 0.08;

} else if (salario <= 4500.00) {
   imposto = (salario - 3000.00) * 0.18 + 1000.00 * 0.08;

} else {
   imposto = (salario - 4500.00) * 0.28 + 1500.00 * 0.18 + 1000.00 * 0.08;

}
if (imposto == 0.0) {
    console.log("Isento");
}
else {
    console.log("R$ ", imposto .toFixed(2));
}
