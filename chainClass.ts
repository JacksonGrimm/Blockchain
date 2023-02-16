import { Block } from "typescript";
import { createBlock } from "./blockClass";
class BlockChain {
    public chain:Object[]
    constructor(){
        this.chain = []
    }
    async init(){
        if (this.chain.length === 0){
            const block = await createBlock([{}])
            this.chain.push(block)
        }else{
            console.log("already initialized")
        }
    }
    getLastBlock(){
        return this.chain[this.chain.length - 1]
    }
    // async addBlock(block:any){
    //     block.prevHash = this.getLastBlock().hash
    // }
}

const start = async () => {
    const chain1 = new BlockChain
    await chain1.init()
    console.log(chain1.chain[0])
}

start()