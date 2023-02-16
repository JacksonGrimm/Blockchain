import bcrypt from "bcrypt"

class Block {
  public timeStamp: number;
  public data: Object;
  public hash: any;
  public prevHash: string;
  private nonce: number;

  constructor(timeStamp: number, data: Object[]) {
    this.timeStamp = timeStamp;
    this.data = data;
    this.prevHash = '';
    this.nonce = 0;
  }
  async initialize() {
    this.hash = await bcrypt.hash(this.timeStamp + this.prevHash + JSON.stringify(this.data), 5)
  }
}

const createBlock = async (objectArray:Object[]) => {
    const block1 = new Block(Date.now(), objectArray)
    await block1.initialize()
    console.log(block1)
}
createBlock([{
    to: "bill",
    from: "tim",
    amount: "100"
}])
