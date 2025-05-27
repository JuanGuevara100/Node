const fs = require('node:fs')

console.log('Leyendo el primer archivo')
fs.readFile('./archivo.txt','utf-8', (err,text) => {
    console.log('Primer texto: ',text)
})

console.log('Haciendo cosas mientras se lee el archivo') // en el modo asincrono, las tareas se ejecutan sin orden y se genera antes de leer el contenido del primer archivo

console.log('Leyendo el segundo archivo')
fs.readFile('./archivo2.txt', 'utf-8', (err,text) => {
    console.log('segundo texto: ', text)
})