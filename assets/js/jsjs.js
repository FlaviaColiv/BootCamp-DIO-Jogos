function funcao1() {
    console.log(this)
} /* a parte interna é um contexto - tranforma em objeto */

const funcao2 = () => {
    console.log(this)
} /* não tem contexto - tranforma em janela */

const flavia = {
    nome: 'Flávia',
    funcao1,
    funcao2
}

flavia.funcao1()
flavia.funcao2()

function soma(x) {
    return function(y) {
        return x + y;
    }
}

console.log(soma(10)(20))

const somaParcial = soma(10)

console.log(somaParcial(20))
console.log(somaParcial(30))
console.log(somaParcial(40))

console.log('****************************************')

const pessoa = {
    nome: 'Flávia',
    idade: 34
}

function gritar(prefixo) {
    console.log(prefixo, this.nome)
}

gritar.apply(pessoa, ['Olá'])

gritar.call(pessoa, 'Olaaaaa')

console.log('*********** CALCULADORA ***********')

function adicao(x, y) {
    return x + y
}

function multiplicacao(x, y) {
    return x * y
}

function divisao(x, y) {
    return x / y
}

function calculadora(x, operacao, y) {
    console.log(operacao(x, y))
}

calculadora(10, adicao, 20)
calculadora(10, multiplicacao, 20)
calculadora(10, divisao, 20)