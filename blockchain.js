const Block =  require('./index')

class Blockchain{

    constructor(){
        this.blocks = [new Block()]
        this.index = 1
        console.log("construtor:", this.blocks) 
    
    }

    getLastBlock(){
        return this.blocks[this.blocks.length - 1]
    }

    addBlock(){
       const index = this.index
       let previusHash = this.getLastBlock().hash
       const block = new Block(index,previusHash)
       this.index ++
       this.blocks.push(this.block)
       console.log("add:",this.blocks)  
        
    }
/*
    isValid(){
        //percorre todos os blocos começando pelo segundo bloco 
        for(let i=1;i<this.blocks.length;i++){
            const currentBlock = this.blocks[i]
            const previusBlock = this.blocks[i-1]
            console.log(currentBlock)  
            
            if(this.currentBlock.hash == this.currentBlock.generateHash()){
                console.log("current hash", currentBlock.hash)
                console.log("previus hash", currentBlock.generateHash)
                return false

            }
        }
        
    }
*/
}

module.exports = Blockchain

