const Block = require('./blockchain')

const blockchain = new Block()
blockchain.addBlock("teste")
blockchain.addBlock("teste")
blockchain.addBlock("teste")
blockchain.isValid()
//console.log(blockchain)
//console.log(blockchain.isValid())
