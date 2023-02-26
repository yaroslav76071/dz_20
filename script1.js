const fs = require('fs')
const readStream = fs.createReadStream('./docs/text.txt');
const writeStream = fs.createWriteStream('./docs/textNEW.txt')

readStream.on('data', (chunk) => {
    console.log('------------')
    console.log(chunk)
})