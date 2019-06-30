const {Blockchain, Block} = require('./Blockchain');

let BakowBlocks = new Blockchain();
let date = new Date();
var newBlock = new Block(date.toDateString(), 'MY DATA', BakowBlocks.getLatestBlock().hash);
var newBlock2 = new Block(date.toDateString(), 'MY DATA2', newBlock.hash);
BakowBlocks.addBlock(newBlock);
BakowBlocks.addBlock(newBlock2);

console.log(JSON.stringify(BakowBlocks));
console.log('Is Blockchain Valid ' + BakowBlocks.isChainValid());
    

// Demonstrate how blockchain cannot be tampered with
// BakowBlocks.chain[1].data = 'tampered data';
// BakowBlocks.chain[1].hash = BakowBlocks.chain[1].calculateHash();
// console.log('Is Blockchain Valid ' + BakowBlocks.isChainValid());