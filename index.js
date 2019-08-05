const sha256 = require('crypto-js/sha256')

class Block{

    constructor(index = 0,previusHash = null,data = 'Genesis block' ){
        this.index = index
        this.previusHash = previusHash
        this.data = data
        this.timestamp = new Date()
        this.hash = this.generateHash()
    }

    generateHash(){
        return sha256(this.index + this.previusHash + JSON.stringify(this.data) + this.timestamp).toString()
    }


}

module.exports = Block
