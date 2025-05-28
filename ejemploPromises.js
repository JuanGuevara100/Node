const ordenPizza = new Promise((resolve,reject) => {
    const pizzaDisponible = true;
      if(pizzaDisponible){
        resolve(console.log("comida lista"))
    } else {
        reject(console.log("Comida en proceso"))
    }
} )


ordenPizza
.then(pedido =>{
    console.log("Comida disponible")
})
.catch(error => {
    console.log("comida no disponible")
})
.finally(()=> {
        console.log("Pedido Finalizado")
})

// ----------------------------------------------------------------------

const miPromesa = new Promise((resolve, reject) => {
  // Código asíncrono que podría tardar en completarse
  setTimeout(() => {
    // Si la operación tiene éxito, se resuelve la promesa
    reject('Éxito!'); 
    // Si la operación falla, se rechaza la promesa
    // reject(new Error('Error'));
  }, 1000);
});

miPromesa
  .then(resultado => {
    // Código que se ejecutará si la promesa se resuelve con éxito
    console.log('La promesa se resolvió con el valor:', resultado);
  })
  .catch(error => {
    // Código que se ejecutará si la promesa se rechaza
    console.error('La promesa fue rechazada con el error:', error);
  })
  .finally(() => {
    // Código que se ejecutará independientemente de si la promesa se resuelve o rechaza
    console.log('La promesa ha terminado (ya sea resuelta o rechazada)');
  });