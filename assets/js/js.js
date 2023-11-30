console.log("********** COMBUSTÍVEL **********")

const etanol = 5.90;
const gasolina = 7.00;
const kmL = 10;

const distancia = 900;
const tipoCombustivel = gasolina;

const gastoKm = tipoCombustivel / kmL;
let gastoTotal = gastoKm * distancia;

// console.log(gastoTotal.toFixed(2));

if (tipoCombustivel == etanol) {
  console.log("Consumirá: R$" + (gastoTotal.toFixed(2)) + " de Etanol ao longo de " + distancia + "km.");
} else {
  console.log("Consumirá: R$" + (gastoTotal.toFixed(2)) + " de Gasolina ao longo de " + distancia + "km.");
};

console.log("********** CÁLCULO DE IMC **********")

const peso = 80;
const altura = 1.75;
const imc = peso / Math.pow(altura, 2);

let msg = "Seu IMC é: " + imc.toFixed(0) + ". Você está com ";

if (imc < 18.5) {
  console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
  console.log(msg + "Peso normal.");
} else if (imc >= 25 && imc < 30) {
  console.log(msg + "Acima do peso.");
} else if (imc >= 30 && imc < 40) {
  console.log(msg + "Obeso!")
} else {
  console.log(msg + "Obesidade Grave!")
};

console.log("********** VALOR DO PRODUTO **********")

/*

1 - Débito
2 - Dinheiro ou Pix
3 - Em duas vezez
4 - Acima de duas vezes */

const valor = 100;
const formaPagamento = 1;

const debito = 0.1;
const pix = 0.15;
const maisVezes = 0.1;

if (formaPagamento === 1) {
  console.log((valor - (valor * debito)).toFixed(2));
} else if (formaPagamento === 2) {
  console.log((valor - (valor * pix)).toFixed(2));
} else if (formaPagamento === 3) {
  console.log(valor.toFixed(2));
} else {
  console.log((valor + (valor * maisVezes)).toFixed(2));
};

