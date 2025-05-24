// Lectura de un archivo:
// Asincrono

const fs = require('fs');
     fs.readFile('my_file.txt', 'utf8', (err, data) => {
       if (err) {
       console.error('Error al leer el archivo:', err);
       return;
            }
       console.log('Contenido del archivo:', data);
        });

// Sincrono        
try {
     const data = fs.readFileSync('my_file.txt', 'utf8');
     console.log('Contenido del archivo:', data);
        } catch (err) {
     console.error('Error al leer el archivo:', err);
        }

// Escritura en un archivo:
// Asincrono
const data = 'Nuevo contenido del archivo';
fs.writeFile('my_file.txt', data, (err) => {
    if (err) {
        console.error('Error al escribir en el archivo:', err);
        return;
    }
    console.log('Archivo escrito correctamente');
});


// Sincrono
const data = 'Nuevo contenido del archivo';
try {
    fs.writeFileSync('my_file.txt', data);
    console.log('Archivo escrito correctamente');
} catch (err) {
    console.error('Error al escribir en el archivo:', err);
}

// Creación de un directorio:
// Asincrono
const path = require('path');

const dirPath = path.join(__dirname, 'my_directory');

fs.mkdir(dirPath, { recursive: true }, (err) => {
    if (err) {
        console.error('Error al crear el directorio:', err);
        return;
    }
    console.log('Directorio creado correctamente');
});

// Sincrono
const path = require('path');

 const dirPath = path.join(__dirname, 'my_directory');

try {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log('Directorio creado correctamente');
} catch (err) {
    console.error('Error al crear el directorio:', err);
}


// Eliminación de un archivo:
// Asincrono
fs.unlink('my_file.txt', (err) => {
    if (err) {
        console.error('Error al eliminar el archivo:', err);
        return;
    }
    console.log('Archivo eliminado correctamente');
});


// Sincrono
try {
    fs.unlinkSync('my_file.txt');
    console.log('Archivo eliminado correctamente');
} catch (err) {
    console.error('Error al eliminar el archivo:', err);
}