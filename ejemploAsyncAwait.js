// Primer ejemplo   
   async function f() {
       let promise = new Promise((resolve, reject) => {
           setTimeout(() => resolve("¡Hecho!"), 1000);
       });
       let result = await promise;
       console.log(result); // Imprimirá "¡Hecho!" después de 1 segundo
   }
   f();

//------------------------------------------------------------------------------------
// Segundo ejemplo
      async function fetchData() {
       try {
           const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
           const json = await response.json();
           console.log(json);
       } catch (error) {
           console.error("Error al obtener datos:", error);
       }
   }
   fetchData();
   
//---------------------------------------------------------------------------------------
// Tercer ejemplo
   async function performTask() {
       try {
           // Lógica asíncrona aquí
           const data = await someAsyncFunction(); // Ejemplo: una promesa
           console.log(data);
       } catch (error) {
           console.error("Error durante la tarea:", error);
       }
   }