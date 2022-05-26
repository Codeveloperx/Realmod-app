import GetData from "../helpers/getProducts.js"
import { PROPIEDADES_URL } from "../helpers/rutas.js"
import ShowProducts from "../modules/showProducts.js";


// const mainNavigation = document.querySelector(".main-navigation");
// const overlay = mainNavigation.querySelector(".overlay");
// const toggler = mainNavigation.querySelector(".navbar-toggler");

const openSideNav = () => mainNavigation.classList.add("active");
const closeSideNav = () => mainNavigation.classList.remove("active");

document.addEventListener("swiped-right", openSideNav);
document.addEventListener("swiped-left", closeSideNav);

// toggler.addEventListener("click", openSideNav);
// overlay.addEventListener("click", closeSideNav);


const contenedor = document.querySelector('.cards-container');
const card_length = document.getElementById('cart-length');

// Mostrar productos en el DOM
document.addEventListener('DOMContentLoaded', async () => {
    let data_Products =  await GetData(PROPIEDADES_URL)

    ShowProducts(data_Products, contenedor);

    card_length.textContent = JSON.parse(localStorage.getItem('Carrito')).length;
})


document.addEventListener('click', ({target}) => {
    if(target.classList.contains('card-img-top')){
        let id_Propiedad = target.id;
        localStorage.setItem('Propiedad', id_Propiedad);
        window.location.href = "./details.html"
    }
    
})

