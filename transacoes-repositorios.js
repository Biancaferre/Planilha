
    const transacoes = {
        transacoes: [
            {
                valor: 10,
                descricao: "Pastel",
                categoria:"despesa"
            },
            {
                valor:3,
                descricao: "Doce",
            categoria: "Receita"
               
            }
        ]
    }

 class TransacoesRepositorio{
    listarTransacoes() {
        return transacoes
    }

criarTransacoes(transacoes){
    const lista = transacoes.transacoes
    lista.push(transacao)
}
}


module.exports = TransacoesRepositorio