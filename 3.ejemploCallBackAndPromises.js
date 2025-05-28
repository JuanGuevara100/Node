    function hacerAlgoAsincrono(callback) {
        setTimeout(() => {
            console.log("Tarea asincrónica completada");
            callback("Éxito"); // Llama al callback con el resultado
        }, 1000);
    }

    hacerAlgoAsincrono(function(resultado) {
        console.log(resultado); // Se ejecutará después de la tarea asincrónica
    });


        function hacerAlgoAsincrono() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Éxito"); // Resuelve la promesa con "Éxito"
            }, 1000);
        });
    }

    hacerAlgoAsincrono()
        .then(resultado => {
            console.log(resultado); // Se ejecutará si la promesa se cumple
        })
        .catch(error => {
            console.log(error); // Se ejecutará si la promesa se rechaza
        });

        