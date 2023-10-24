const fs = require('node:fs');


console.log('Primer archivo.................');

fs.readFile('./archivo.txt', 'utf8', (err, text) => { // <------------ ejucutas este callbacks
    console.log('Primer texto:',text)
});

console.log('----> Hacer cosas mientras lee el archivo....')

console.log('Segundo archivo.................');

fs.readFile('./archivo2.txt', 'utf8', (err, text2) => {
    console.log('Segundo:',text2)
});