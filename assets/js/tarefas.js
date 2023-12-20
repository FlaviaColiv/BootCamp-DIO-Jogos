const fs = require('fs')

/*
leituraArquivo
    .then((arquivo) => arquivo.toString('utf8'))
    .then((textoDoArquivo) => textoDoArquivo.split('\n').slice(1))
    .then((linhasSemCabecalho) => linhasSemCabecalho.map((linha) => {
        const [nome, feito] = linha.split(';')
        return {
            nome,
            feito: feito.trim() === 'true'
        }
    }))
    .then((listaDeTarefas) => console.log(listaDeTarefas))
    .catch((error) => {console.log('Deu ruim!!!', error)})
*/

async function buscarArquivo() {
    try {
        const arquivo = await fs.promises.readFile('tarefas.csv') /* await tranformado em procedural*/
        const textoDoArquivo = arquivo.toString('utf8')
        console.log(textoDoArquivo)
    } catch (error) {
        console.log(error)
    } finally {
        console.log('Finalizou!')
    }
}

buscarArquivo()