const fs = require('node:fs')

console.log('1. Leyendo el primer archivo')
fs.readFile('./archivo.txt','utf-8', (err,text) => {
    console.log('2. Primer texto: ',text)
})

console.log('3. Haciendo cosas mientras se lee el archivo') // en el modo asincrono, las tareas se ejecutan sin orden y se genera antes de leer el contenido del primer archivo

console.log('4. Leyendo el segundo archivo')
fs.readFile('./archivo2.txt', 'utf-8', (err,text) => {
    console.log('5. segundo texto: ', text)
})