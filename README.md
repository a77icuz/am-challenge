# am-challenge

## Harry Potter Web App Challenge in React

Este proyecto fue creado utilizando [ViteJs](https://github.com/vitejs/vite).


## Primesos pasos

1. Haz un clone de este repo, `git clone https://github.com/a77icuz/am-challenge.git <nombre-del-proyecto>`
2. Accesa al directorio principal del proyecto, `cd <nombre-del-proyecto>`
3. Ejecuta el comando `npm install` para instalar todas las dependencias.
4. Ejecuta el comando `npm run dev` para montar la aplicación en modo desarrollo.


## Consideraciones antes de montar el proyecto

Para el correcto funcionamiento de la aplicación y por requerimiento de la evaluación, es necesario montar un Fake API Rest con [json-server](https://github.com/typicode/json-server).

1. Instalar json-server con el comando `npm install -g json-server` desde la terminal con privilegios de administrador.
2. Navegar al directorio `./src/db` de nuestro proyecto donde se ubica el archivo `hp-characters.json`.
3. Ejecutar el comando `json-server --watch hp-characters.json --port 4000` para montar nuestro servidor.


## Comandos disponibles

Puedes ejecutar los siguientes comandos via `npm run [comando]`:

* `dev` - Ejecuta la aplicación en modo desarrollo en el puerto [3000](http://localhost:3000).
* `build` - Crea el bundle para producción en el folder `dist`.
* `preview` - Crea una vista previa de manera local en modo producción en el puerto [5000](http://localhost:5080).


## Q A

### ¿Qué es lo que más te gustó de tu desarrollo?

* Me gusto mucho el proyecto, fue muy agradable de desarrollar, ya que me siento muy comodo trabando con React y Redux que con otro framework.

### Si hubieras tenido más tiempo ¿qué hubieras mejorado o qué más hubieras hecho?

* Implementar animaciones de  transición para suavizar la vista durante la renderización de componentes.
* Implementar validación de inputs en el formulario de "Agregar".

### Descríbenos un pain point o bug con el que te hayas encontrado y como lo solucionaste

* Implementar el cambio de color de acuerdo a la casa a la que pertenece el personaje, ya que son difentes casas y asi como tambien existen usuarios en la BD que no pertenencen a una casa en especifico, por lo que se opte crear un diccionario para hacer el render del background.
