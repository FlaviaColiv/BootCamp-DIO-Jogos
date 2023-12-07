const pessoa1 = {
	idade: 34
}

const flavia1 = {
	nome: 'Flavia1',
	__proto__: pessoa1
}

console.log(flavia1.idade)

/* Criar objetos */

const pessoa2 = {
	genero: 'feminino'
}

const flavia2 = Object.create(pessoa2)

flavia2.nome = 'Flavia'

console.log(flavia2.genero)

