console.log("******** CÁLCULO DE IMS ********")

function calcularImc(peso, altura) {
  return peso / (Math.pow(altura, 2));
};

function classificarImc(imc) {
  if (imc < 18.5) {
    return 'Abaixo do peso.';
  } else if (imc >= 18.5 && imc < 25) {
    return 'Peso normal.';
  } else if (imc >= 25 && imc < 30) {
    return 'Acima do peso.';
  } else if (imc >= 30 && imc < 40) {
    return 'Obeso.';
  } else {
    return 'Obesidade Grave!!!';
  };
};

function main () {
  const peso = 72;
  const altura = 1.65;

  const imc = calcularImc(peso, altura);
  console.log(classificarImc(imc));
};

main();

console.log("******** IDENTIFICAÇÃO ********")

function escreverMeuNome(nome) {
  return('Meu nome é ' + nome);
};

function maiorDeIdade (idade) {
  if (idade >= 18) {
    return('e sou maior de idade!');
  } else {
    return('e sou menor de idade.');
  };
};

function pessoa (nome, idade) {
  console.log(escreverMeuNome(nome), maiorDeIdade(idade));
}

pessoa('Flavia', 34)

console.log("******** CÁLCULO DE PREÇO ********")

function criarDesconto (desconto) {
  return ((valor * desconto)/100);
};

const valor = 100;

function modoDePagamento (modo) {
  if (modo === 1) {
    return (valor - (criarDesconto(10)));
  } else if (modo === 2) {
    return (valor - criarDesconto(15));
  } else if (modo === 3) {
    return valor;
  } else {
    return (valor + (criarDesconto(10)));
  };
};

console.log(modoDePagamento(1));