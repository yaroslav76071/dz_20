
const fs = require('fs')
const readStream = fs.createReadStream('./docs/text.txt');
const writeStream = fs.createWriteStream('./docs/textNEW.txt');

let chunkNum = 1;

readStream.on('data', (chunk) => {
    writeStream.write(`\nЧасть №${chunkNum}\n`)
    writeStream.write(chunk)
    chunkNum++
})


