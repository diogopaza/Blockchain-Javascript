const Block = require('./blockchain')

//testando se o blockchain e imutavel
const blockchain = new Block()
blockchain.addBlock("teste")
blockchain.addBlock("teste1")
blockchain.addBlock("teste2")
console.log(blockchain.isValid())//retorna true
blockchain.blocks[2].index = 10 //altera integrida do bloco 2
console.log(blockchain.isValid())//retorna false
