/* VARIABLES */
/* capturar elementos DOM */
const imagenBanner = document.querySelector('#bienvenidos img')
/* Acceder al elemento del DOM para crear los artículos de viajes */


/* Acceder al elemento del DOM para crear añadir los options */

const arrayBanners = [
    {
        id: 1,
        src: 'assets/banner/1.jpg',
        alt: 'Banner uno'
    },
    {
        id: 2,
        src: 'assets/banner/2.jpg',
        alt: 'Banner uno'
    },
    {
        id: 3,
        src: 'assets/banner/3.jpg',
        alt: 'Banner uno'
    },
    {
        id: 4,
        src: 'assets/banner/4.jpg',
        alt: 'Banner uno'
    },
    {
        id: 5,
        src: 'assets/banner/5.jpg',
        alt: 'Banner uno'
    },
    {
        id: 6,
        src: 'assets/banner/6.jpg',
        alt: 'Banner uno'
    },
    {
        id: 7,
        src: 'assets/banner/7.jpg',
        alt: 'Banner uno'
    },
    {
        id: 8,
        src: 'assets/banner/8.jpg',
        alt: 'Banner uno'
    },
]
const arrayViajes = {

}
const arrayDestinos = {}


/* EVENTOS */

/* FUNCIONES */
/**
 * Genera y devuelve un índice que después se utiliza
 * para seleccionar una posición del arreglo de banners.
 */
const aleatorio = () => {
    // Aquí irá la lógica para calcular un índice al azar.
    const indice = '********'
    // Retornamos el índice para usarlo en otras funciones.
    return indice
}

/**
 * Obtiene un banner (actualmente fijo) y actualiza
 * la imagen del DOM con su `src` y su texto alternativo.
 */
const pintarBanner = () => {
    // Llamamos a la función de índice aleatorio para decidir qué banner mostrar.
    const indice = aleatorio()
    // Por ahora se utiliza el primer banner del arreglo.
    const elemento = arrayBanners[0]

    // console.log(elemento.alt)
    // console.log(elemento.src)

    // Se asigna la ruta de la imagen del banner al atributo `src`.
    imagenBanner.setAttribute('src', elemento.src)
    // Se asigna el texto alternativo para accesibilidad.
    imagenBanner.alt = elemento.alt
    // console.log(imagenBanner)

}

const pintarCards = {
    /* Recorre los elementos del array de viajes para crear cada tarjeta. */
    /* Por cada elemento crea un article como contenedor principal. */
    /* Crea un div interno para agrupar la imagen. */
    /* Crea una imagen y le asigna sus atributos (src y alt). */
    /* Crea un h3 y le asigna el título del viaje. */
    /* Crea un p y le asigna la descripción correspondiente. */

    /* Inserta la imagen dentro del div. */
    /* Inserta el div dentro del article. */
    /* Inserta el h3 y el p dentro del article. */

    /* Añade el article al fragmento para optimizar el renderizado. */
    /* Finaliza el recorrido del array cuando no quedan elementos. */

    /* Inserta el fragmento completo en el contenedor flexContainer del DOM. */

}
const pintarDestinos = {
    /* Construye y pinta las opciones de destinos en el elemento select del DOM. */
    /* Recorre el objeto/array de destinos para crear cada option dinámicamente. */
    /* Asigna value y texto visible a cada opción antes de insertarla. */
}



/* INVOCACIÓN A LAS FUNCIONES */
pintarBanner()
// pintarCards()
