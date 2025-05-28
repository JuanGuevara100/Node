function greet(name, callback) {
  callback(); // Llama a la función callback
    console.log("Ejercicio 1, Respuesta: "+"Hola, " + name + "! "+ callback());
}

function sayGoodbye() {
    return "Adios"
}

greet("Juan", sayGoodbye); // La función sayGoodbye se ejecutará después de la primera línea


//----------------------------------------------------------------------------------------------

function suma(a, callback1) {
  callback1(); // Llama a la función callback
  return a+callback1()
}

function suma2(c,b) {

return c+b
}

console.log('Ejercicio 2, respuesta: ', suma(5, () =>suma2(5,4))) // La función sayGoodbye se ejecutará después de la primera línea


//------------------------------------------------------------------------------------------------
