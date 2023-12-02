console.log("******** ARRAYS ********");

const alunos = ['Flávia', 'Cristian', 'Maria']; /*lista*/

alunos.push('Renan'); /* dinâmica - incluir item */
alunos[4] = 'Renato'; /* direta. incluir item na posição prédefinida, mas, exclui quem estava na posição anteriormente */

alunos.pop(); /* exclui o último da lista, e .shift exlui o primeiro da lista */

console.log(alunos);
console.log(alunos[0]); /* posição */

console.log("******** ESTRUTURAS DE REPETIÇÃO ********");

const notas = [];
 
notas.push(5);
notas.push(7);
notas.push(8);
notas.push(5);
// notas.push(2);
notas.push(8);

// notas.length; /*tamanho da lista*/

console.log(notas);

/* for é  feito para percorrer por determinada vezes*/
/* normal usa i (inicio; condicionais; próxima etapa após condicional)*/

// const nome = 'Flávia Conceição Oliveira';

// for (let i = 0; i < nome.length; i++) {
//   const letra = nome[i];
//   console.log(letra);
// }

let soma = 0;

for (let i = 0; i < notas.length; i++) {
  const nota = notas[i];
  soma = soma + nota;
  console.log(`Iteração ${i + 1}: nota = ${nota}, soma = ${soma}`);
}

console.log('Soma total:', soma);

const media = soma / notas.length;
console.log(media.toFixed(1));

console.log("******** EXERCICIO 1 - TABUADA ********");

const tabuadaDe = 7;
let tabuada = [];

for (let i = 1; i <= 10; i++) {
  tabuada = tabuadaDe * i;

  console.log(`${tabuadaDe} x ${i} = ${tabuada}`)
}

console.log("******** EXERCICIO 2 - NÚMEROS PARES ********");

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {
  const numero = numeros[i];
  if (numero % 2 === 0) {
    console.log(numero);
  }
}

console.log(numeros);
