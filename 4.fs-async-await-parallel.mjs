

import { readFile } from 'node:fs/promises';

Promise.all([
    readFile('./archivo.txt', 'utf8'),
    readFile('./archivo2.txt', 'utf8')
]).then((text, text2) => {
    console.log('Primer texto:',text),
    console.log('Segundo:',text2)
})

/* console.log('Primer archivo.................');

const text = await readFile('./archivo.txt', 'utf8')
console.log('Primer texto:',text);

console.log('----> Hacer cosas mientras lee el archivo....');

console.log('Segundo archivo.................');
const text2 = await readFile('./archivo2.txt', 'utf8')
console.log('Segundo:',text2); */


    