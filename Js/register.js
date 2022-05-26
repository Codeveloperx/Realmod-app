import PostData from "../helpers/PostData.js";
import { USERS_URL } from "../helpers/rutas.js";


const registrarse = document.querySelector('.registrarse');

registrarse.addEventListener('click', async () => {

    let user = document.getElementById('user').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let infoUser = {
        id: crypto.randomUUID(),
        user,
        email,
        password
    }
console.log(infoUser)
  await PostData(USERS_URL, infoUser);

})