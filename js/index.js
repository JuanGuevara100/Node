//Primer Hola Mundo en Node
console.log('Hola Mundo')
const s =4;
console.log(s);


// Variable global globalThis Esto es una variable global, accesible desde cualquier parte del script
global.miVariableGlobal = "Hola mundo";
console.log(global.miVariableGlobal); // Output: Hola mundo
console.log(global.process.version); // Output: Versión de Node.js

var globalVar = "Soy global";
console.log(globalVar); // Output: Soy global

// module.exports exportacion de funciones
const {sum} = require('../suma')
console.log(sum(1,2));
console.log(sum(3,4));