const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

lista.forEach((value, i, listRef) => {
    console.log(value, i, listRef),
    console.log(value + i)
})

const cb = (value, i, listRef) => {
    console.log(value + i)
}

lista.forEach(cb)

// for (let i = 0; i < lista.length; i++) {
//     const element = array[i];
//     cb(element, i, lista)
// }

console.log('********** O normal de percorrer a lista **********')

lista.forEach((value) => {
    console.log(value)
})

console.log('****************  FILTE  ****************')

const listaDeNumerosPares = lista.filter((element) => {
    return (element % 2 === 0)
}) 
console.log('Lista Completa', lista)
console.log('Nova Lista do filter', listaDeNumerosPares)

console.log('******************** MAP ********************')

/*lista de elementos em HTML */

class Pessoa {
    constructor(name) {
        this.name = name
    }
}

const lista1 = [new Pessoa('Flávia'), new Pessoa('Cristian'), new Pessoa('Livia'), new Pessoa('João')]

console.log(lista1)

const listaNomes = lista1.map((element) => element.name /*converta elemento em string */)

console.log(listaNomes)

const listaNomes2 = lista1.map((element, i) => {
    return `${i} - ${element.name}` /*converta elemento em string */
})

console.log(listaNomes2)

const listaNomes3 = lista1.map((element) => {
   return ` <li>
        ${element.name}
    </li>
    `
})

console.log(listaNomes3)

console.log('*******************  REDUCE  *******************')

/*percorrendo toda a lista e transformando em único valor*/
//percorrer a lista de um em um e reduzir à único elemento

const somaDeTodosOsNumeros = lista.reduce((previous, current) => {
    console.log('Cálculo realizado em cada etapa', previous, current)
    return previous + current
}, 0 /* valor inicial*/)

console.log('Soma de todos os numeros da lista =', somaDeTodosOsNumeros)

console.log('*******************  JOIN  *******************')

//JUNTAR e transformar em uma string

console.log(lista.join('/'))

const objetos = [{ nome: 'Flávia'}, { nome: 'Cristian'}, { nome: 'Lívia'}, {nome: 'Luzia'}]
console.log(objetos.map((e) => e.nome).join(', '))

console.log(
    objetos.map(e => e.nome)
    .filter((e) => e.startsWith('L'))
    .join(', ')
)

const elementosEmHtml = objetos
    .filter((e) => e.nome.startsWith('L'))
    .map(e => `<li>${e.nome}</li>`)
    .join('')

console.log(elementosEmHtml)