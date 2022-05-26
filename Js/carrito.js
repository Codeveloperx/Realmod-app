import DeleteData from "../helpers/deleteData.js";
import { PROPIEDADES_URL, USERS_URL } from "../helpers/rutas.js";
import ShowCarrito from "../modules/showCarrito.js";

const container =  document.querySelector('.body-cart');
const items = document.querySelector('.text-info');
// const subTotal = document.getElementById('total');

document.addEventListener('DOMContentLoaded', ()=>{
    let cart = JSON.parse(localStorage.getItem('Carrito'));
    
    ShowCarrito(cart, container);

    items.textContent = cart.length;

})



document.addEventListener('click', ({target}) => {
    if(target.classList.contains('eliminar')){
    let id = target.id;
     console.log(id)

    let url = `${PROPIEDADES_URL}/${id}`
    
    DeleteData(url)
    .then(() => {
        window.location.href = '/pages/home.html';
  })
}
})
