const sha256 = require('crypto-js/sha256')

myHash = sha256('diogo')
console.log(myHash)

class Block{

    constructor(index = 0,previusHash = null,data = 'Genesis block' ){
        this.index = index
        this.previusHash = previusHash
        this.timestamp = new Date()
        this.hash = this.generateHash()
    }

    generateHash(){
        return sha256(this.index + this.previusHash + JSON.stringify(this.data) + this.timestamp.toString())
    }


}

module.exports = Block




/*
data = 'Genesis block'
timestamp = Date()

console.log(data)
console.log(JSON.stringify(data))
console.log(timestamp)
console.log(timestamp.toString())
*/
