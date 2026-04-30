/* VARIABLES */
/* capture DOM elements */
const bannerImage = document.querySelector('#welcome img')
/* access the DOM element to create travel articles */


/* access the DOM element to create and add options */

const banners = [
    {
        id: 1,
        src: 'assets/banner/1.jpg',
        alt: 'Banner one'
    },
    {
        id: 2,
        src: 'assets/banner/2.jpg',
        alt: 'Banner one'
    },
    {
        id: 3,
        src: 'assets/banner/3.jpg',
        alt: 'Banner one'
    },
    {
        id: 4,
        src: 'assets/banner/4.jpg',
        alt: 'Banner one'
    },
    {
        id: 5,
        src: 'assets/banner/5.jpg',
        alt: 'Banner one'
    },
    {
        id: 6,
        src: 'assets/banner/6.jpg',
        alt: 'Banner one'
    },
    {
        id: 7,
        src: 'assets/banner/7.jpg',
        alt: 'Banner one'
    },
    {
        id: 8,
        src: 'assets/banner/8.jpg',
        alt: 'Banner one'
    },
]
const trips = {

}
const destinations = {}


/* EVENTOS */

/* FUNCIONES */
const randomIndex = () => {
    const index = '********'
    return index
}

const renderBanner = () => {

    const index = randomIndex()
    const element = banners[0]

    // console.log(element.alt)
    // console.log(element.src)

    bannerImage.setAttribute('src', element.src)
    bannerImage.alt = element.alt
    // console.log(bannerImage)

}

const renderCards = {
    /* iterate over the array elements/*
    /* for each element create:/*
    /* un article   */
    /* un div   */
    /* an image assigning its attributes   */
    /* an h3 assigning its value   */
    /* a p assigning its value   */

    /* put the image inside the div */
    /* put the div inside the article */
    /* put the h3 and p inside the article */

    /* add the article to the fragment */
    /* finish iterating through the array */

    /* add the fragment to the flexContainer div */

}
const renderDestinations = {

}



/* FUNCTION INVOCATION */
renderBanner()
// renderCards()
