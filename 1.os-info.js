const os = require('node:os');

console.log('Informacion del sistemas operativo:');
console.log('-------------------------------------');

console.log('Nombre del sistemas operativo', os.platform());
console.log('Version del sistemas operativo', os.release());
console.log('Arquitectura del sistemas operativo', os.arch());
console.log('CPU`s del sistemas operativo', os.cpus());
console.log('Memoria Libre del sistemas operativo', os.freemem() / 1024 / 1024);
console.log('Memosia Total del sistemas operativo', os.freemem() / 1024 / 1024);
console.log('update del sistemas operativo', os.uptime() / 60 / 60);