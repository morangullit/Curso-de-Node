

import { readFile } from 'node:fs/promises';

console.log('Primer archivo.................');

const text = await readFile('./archivo.txt', 'utf8')
console.log('Primer texto:',text);

console.log('----> Hacer cosas mientras lee el archivo....');

console.log('Segundo archivo.................');
const text2 = await readFile('./archivo2.txt', 'utf8')
console.log('Segundo:',text2);
    