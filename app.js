const express = require('express')

const TransacoesRepositorio = require("./transacoes-repositorios")

const app = express()
const port = 3000

/// precisa ter para acessar o body
app.use(express.json());
app.use(express.static(`${__dirname}/public`))

app.post('/transacoes', (req, res) => {
})

app.get('/transacoes', (req, res) => {
    const repositorio = new TransacoesRepositorio()
    const transacao = repositorio.listarTransacoes()
    
    let saldo = 0 
    TransacoesRepositorio.transacao.forEach((transacao) => {
        if (transacao.categoria === "Despesa") {
            saldo = saldo + transacao.valor
        }
        if (transacao.categoria === "receita"){
            saldo = saldo + transacao.valor
        }

    })
    
 Transacoes.saldo = saldo 
 res.send(transacoes)
})

app.post ('/transacoes', (req, res) => {
    const repositorio = new transacaoRepositorio()
    const transacao = red.body
    repositorio.criarTransacoes(transacao)
    res.status(201).send(transacoes)
})

app.listen(port, () => {
    console.log(`servidor Ouvindo na porta ${port}`)
})

    
    


