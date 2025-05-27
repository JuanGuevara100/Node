const fs = require('node:fs')

console.log('Leyendo el primer archivo')
const text = fs.readFileSync('./archivo.txt','utf-8')
console.log(text);

console.log('Haciendo cosas mientrasa se lee el archivo') // en el modo sincrono, las tareas se ejecutan una a una, por orden, sin importar el tiempo de ejecución

console.log('Leyendo el segundo archivo')
const text1 = fs.readFileSync('./archivo2.txt', 'utf-8')
console.log(text1);