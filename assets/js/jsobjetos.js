console.log("******** OBJETO ********");

const flavia = {
  nome: 'Flávia Oliveira',
  idade: 34,

  descrever: function () {
    console.log(`Meu nome é ${this.nome} e minha idade é de ${this.idade} anos.`);
  }
};

console.log(flavia.nome);
console.log(flavia.idade);
console.log(flavia);

flavia.altura = 1.65;
console.log(flavia);
flavia.peso = 72;
console.log(flavia);

delete flavia.peso;
console.log(flavia);

flavia.descrever();

const atributo = 'idade'; /* string que bate com o valor dentro de flavia */
console.log(flavia[atributo]); /* Anotação de coleção. Acesso dinâmico. */

flavia['nome'] = 'Flávia Oliveira'; /* acesso dinâmico */
flavia.nome = 'Flávia Oliveira'; /*acesso direto*/

console.log("******** CLASSE ********");

class Pessoa {

  nome;
  idade;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  descrever () {
    console.log(`Meu nome é ${this.nome} e minha idade é de ${this.idade} anos.`);
  }
}

const cristian = new Pessoa("Cristian Miranda", 32);

console.log(cristian);
console.log(flavia);

flavia.descrever();
cristian.descrever();

console.log('******* COMPARAÇÃO DE PESSOAS *******');

function compararPessoas(p1, p2) {
  if (p1.idade > p2.idade) {
    console.log(`${p1.nome} é mais velho(a) que ${p2.nome}.`);
  } else if (p2.idade > p1.idade) {
    console.log(`${p2.nome} é mais velho(a) que ${p1.nome}.`);
  } else {
    console.log(`${p1.nome} e ${p2.nome} têm a mesma idade.`)
  }
}

compararPessoas(flavia, cristian);

console.log('******* EXERCÍCIO 1 *******');

class Carros {

  marca;
  cor;
  gastoMedioPorKm;

  constructor(marca, cor, precoCombustivel, kmL) {
    this.marca = marca;
    this.cor = cor;
    this.precoCombustivel = precoCombustivel;
    this.kmL = kmL;
    this.precoMedioPorKm = precoCombustivel / kmL;
    this.gastoMedioPorKm = 1 / kmL;
    this.kmViagem = kmViagem;
    this.precoViagem = kmViagem * this.precoMedioPorKm;
    // this.precoViagem = precoViagem;
  }

  descrever () {
    console.log(`O carro de marca ${this.marca} e de cor ${this.cor} tem um gasto médio de combustível de R$${(this.precoMedioPorKm).toFixed(2)} por km ou ${(this.gastoMedioPorKm).toFixed(2)} litros por km; por isso, se você percorrer ${this.kmViagem}km você gastará R$${(this.precoViagem.toFixed(2))}, só de ida.`);
  }
}

const precoCombustivel = 7.90;
const kmViagem = 17;

const ford = new Carros('Ford', 'azul', [precoCombustivel], 10);
ford.descrever();

const uno = new Carros('Uno', 'vermelho', [precoCombustivel], 12);
uno.descrever();