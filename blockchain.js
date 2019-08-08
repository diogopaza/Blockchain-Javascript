const Block =  require('./index')

class Blockchain{

    constructor(){
        this.blocks = [new Block()]
        this.index = 1
       
    
    }

    getLastBlock(){
        return this.blocks[this.blocks.length - 1]
    }

    addBlock(data){
       const index = this.index       
       let previusHash = this.getLastBlock().hash
       const block = new Block(index,previusHash,data)
       this.index ++
       this.blocks.push(block)
       //console.log("add:",this.blocks)  
        
    }

    isValid(){
        //percorre todos os blocos começando pelo segundo bloco 
        for(let i=1;i<this.blocks.length;i++){
             const currentBlock = this.blocks[i]
            const previusBlock = this.blocks[i-1]
                        
            if(currentBlock.hash != currentBlock.generateHash()){
                console.log("HASH nao corresponde")
                console.log("Bloco "+currentBlock.data + " INVALIDO" )
                return false
            }
            if(currentBlock.index != previusBlock.index + 1){
                console.log("Index nao corresponde")
                console.log("Bloco "+currentBlock.data + " INVALIDO" )
                return false
            }
            if(currentBlock.previusHash != previusBlock.hash){
                console.log("Previus Hash nao corresponde")
                console.log("Bloco "+currentBlock.data + " INVALIDO" )
                return false
            }
            console.log("Bloco "+currentBlock.data + " OK" )
            
        }
        return true
    }

}

module.exports = Blockchain

