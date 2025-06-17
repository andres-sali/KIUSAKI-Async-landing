const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCw05fUBPwmpu-ehXFMqfdMw&part=snippet%2Cid&order=date&maxResults=9';

const content = null || document.getElementById('content');

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    'X-RapidAPI-Key': 'c68edbdba9mshc3cb6eb8038f3b2p1f444ajsna5de19fe1256'
  }
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetchData(API);
    let view = `
    ${videos.items.map(video => `
      <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
      </div>
    `).slice(0, 4).join('')}
    `;
    content.innerHTML = view;
  } catch (error) {
    console.log(error);
  }
})();


// clase 18 consumiendo API 
// continuando con la logica de la landing

/*
* entra a (https://rapidapi.com/ ) y creamos una cuenta al dar click en (sign up) y seguir los pasos.
* buscamos la api que quiera usar. la version de la API de youtube que vamos a usar es (youtube v3)
* Una vez seleccionada la API nos mostrara 3 columnas con los servicios y herramientas que estan disponible en la API para el ejemplo se usa 
    (channel videos) para optener los ultimos videos publicados en la columna central, se debe indicar la id del canal que queremos mostrar en la landing,
    este se obtiene en la url de youtube despuies de channel/, por ejemplo para el canal de youtube del profe es https://www.youtube.com/channel/UC9k0tTsh_qStx0HPuPftSsg el 
    id del canal es   UC9k0tTsh_qStx0HPuPftSsg   eso es lo que se debe de pegar en el parametro  (channeld)
* mas abajo se puede configurar el maximo de videos que se desean obtener (maximo hasta 50), para el ejemplo se coloco 2 en mi caso 
* En la tercera columna, se selecciona en la lista el lenguaje de programacion y el metodo que se quiere usar, en este caso:
        JavaScript → fetch  
    con esto aparecera la plantilla del codigo.
* para visualizar la salida al testear la plantilla, en la columna del medio al dar clik en (Test Endpoint)  la pestaña (Results) se activa y podemos conocer 
    cada uno de los elementos de los objetos, esa información nos será útil para nuestro el código.

* Copiar la plantilla e ir al editor VSC en la ruta (src/assets) y pegarlo en main.js
* La url que se pasa por argumento a la función fetch, la cambiamos al inicio del código para declarar la constante API:


            const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCw05fUBPwmpu-ehXFMqfdMw&part=snippet%2Cid&order=date&maxResults=9';


* La variable options si la dejamos igual, tal cual como lo muestra rapidapi:

    const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '6540473ff4mshfbdbb244ab22f99p10c708jsnfd294791e746',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};


* Como vamos a usar el (asyn/await), borramos el código de fetch estructurado con then y catch. En lugar de ello, usamos la lógica que hicimos en ejemplos anteriores:  */ 



//Lógica de async: ir por los datos, luego esperar por ellos y finalmente retornarlos hacia el usuario

   /*

async function fetchData(urlApi) { //siempre async antes de function
    const response = await fetch(urlApi, options); //hacemos uso del fetch() y solo por esta vez le pasamos la opciones 
    const data = await response.json(); //estructura de los datos transformandolos en json
    return data; //retorna la información de la API que estamos solicitando 
}
    */

/*
    *Ahora vamos usar un nuevo concepto: (una función que se invoca a sí misma); con JavaScript podemos tener funciones anónimas que permitan llamarse automáticamente, 
        la estructura cuenta con la palabra reservada **async **y con funciones arrows:
*/ 
/*
    (async () => {  //Dentro implementamos la lógica necesaria para hacer el llamado a la API, obtener los elementos y mostrarlos en html
        try{//Se implementa try y catch
        } catch {
        }
        })();
*/

/*
    * Dentro de try{} estará el llamado de la API y el template de html para interpretar los datos a iterar por cada objeto, en este caso, cuando analizamos la salida
        de la API en rapidapi, hay una jerarquía de los datos, están los 9 “items” del 0 al 8 para la posición de cada vídeo, luego el “snippet” de cada item, luego “thumbnails”
        y éste a su vez los tamaños de la imagen (nos interesa con la más alta resolución “high”), también nos interesa mostrar la descripción “description” y nombre “title” de cada vídeo:
*/ 

/*
(async () => {
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700" style="color:white;">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                    </h4>
                </div>
            </div>
        `).slice(0, 4).join('')}
        `;
        content.innerHTML = view;
    } catch {
     
    }
})();

*/