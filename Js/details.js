import GetDataById from "../helpers/getProductID.js"
import ShowDetails from "../modules/showDetails.js";


const contenedor = document.querySelector('.details-card');
let detailProduct = [];
const id_Propiedad =  localStorage.getItem('Propiedad');
const card_length = document.getElementById('cart-length');

let carrito;


document.addEventListener('DOMContentLoaded', async ()=>{
    let propiedad_seleccionada =  await GetDataById(id_Propiedad);
    detailProduct.push(propiedad_seleccionada);

    ShowDetails(detailProduct, contenedor);

    document.querySelector('.add-carrito').addEventListener('click', () =>{
        carrito = JSON.parse(localStorage.getItem('Carrito')) || [];
        
        carrito.push(propiedad_seleccionada);
        let carritoJson = JSON.stringify(carrito);

        localStorage.setItem('Carrito', carritoJson);
        console.log(carrito)
        alert("ELEMENTO AGG");
    })

    card_length.textContent = JSON.parse(localStorage.getItem('Carrito')).length;
});

