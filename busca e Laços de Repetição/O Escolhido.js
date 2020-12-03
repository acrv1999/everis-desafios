let qtd_alunos = parseInt(gets());
let classe = new Map();

     for (i = 0; i<qtd_alunos; i++) {
     let aluno = gets().split(' ').map(Number);
 
     classe.set(aluno[0], aluno[1]);
}
let o_escolhido = [0,0];
classe.forEach(function(value, key) {

      if(o_escolhido[1] < value) {
         o_escolhido[0] = key;
         o_escolhido[1] = value;
      }
}, classe);

console.log(o_escolhido[1] >= 8 ? o_escolhido[0] : 'Minimum note not reached');