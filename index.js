const sha256 = require('crypto-js/sha256')

class Block{

    constructor(index = 0,previusHash = null,data = 'Genesis block',difficulty =1 ){
        this.index = index
        this.previusHash = previusHash
        this.data = data
        this.timestamp = new Date()
       // this.hash = this.generateHash()
        this.difficulty = 1
        this.nonce = 0

        this.mine()
    }

    generateHash(){
        return sha256(this.index + this.previusHash + JSON.stringify(this.data) + this.timestamp+this.nonce).toString()
    }

    mine(){
        this.hash = this.generateHash()
        while(!(/^0*$/.test(this.hash.substring(0, this.difficulty) ) ) ){
            this.nonce ++
            this.hash = this.generateHash()
        }
    }


}

module.exports = Block
