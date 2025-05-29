// Modulo Path
const path = require('node:path');

/*Unir rutas: path.join() une varios segmentos de ruta en una sola, utilizando el separador de directorios correcto para el sistema operativo. */
const filePath = path.join(__dirname, 'files', 'data.txt');
console.log(filePath); // Devuelve la ruta completa al archivo

/*Resolver rutas relativas: path.resolve() convierte una ruta relativa en una ruta absoluta.   */
const absolutePath = path.resolve('./files/data.txt');
console.log(absolutePath); // Devuelve la ruta absoluta al archivo

/*Obtener el directorio de una ruta: path.dirname() devuelve el directorio de una ruta dada.  */
const directory = path.dirname('/home/user/project/file.js');
console.log(directory); // Devuelve /home/user/project

/*Obtener el nombre de archivo y extensión: path.parse() descompone una ruta en sus componentes: nombre, directorio, extensión, etc.*/
const parsedPath = path.parse('/home/user/project/file.js');
console.log(parsedPath); // Devuelve un objeto con los componentes de la ruta

/*Gestionar separadores de directorios: path.sep es el separador de directorios específico del sistema operativo (\\ en Windows, / en otros).*/
console.log(path.sep); // Devuelve \ o / según el sistema operativo

/*extrae el nombre de archivo o directorio de una ruta dada*/
const base = path.basename('tmp/midu-scret-files/password.txt')
console.log(base)

/* path.basename(path, [ext]) [ext]: Opcional. Una cadena que representa la extensión del archivo. Si se proporciona, se eliminará de la parte final de la ruta.*/
const filename = path.basename('tmp/midu-scret-files/password.txt', '.txt')
console.log(filename)

/*Obtiene la extension de un archivo */
const extension = path.extname('my.super.image.jpg')
console.log(extension)