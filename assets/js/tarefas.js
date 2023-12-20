const fs = require('fs')

const leituraArquivo = fs.promises.readFile('tarefas.csv')

leituraArquivo.then((arquivo) => {
    console.log(arquivo.toString('utf8'))
})