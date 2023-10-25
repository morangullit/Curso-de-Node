const fs = require('node:fs/promises');
const { text } = require('stream/consumers');


console.log('Primer archivo.................');

fs.readFile('./archivo.txt', 'utf8')
.then(text => console.log('Primer texto:',text));


console.log('----> Hacer cosas mientras lee el archivo....');

console.log('Segundo archivo.................');

fs.readFile('./archivo2.txt', 'utf8').then(text2 => console.log('Segundo:',text2));
    