import GetUsers from "../helpers/getUser.js";
import { USERS_URL } from "../helpers/rutas.js";

let form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let email = document.getElementById('email').value;
  
    let data = await GetUsers(USERS_URL);
  
    data.forEach(user => {
      const {user_type, email: emailUser } = user;
  
      if (emailUser == email) {
        let dataUser = data.find(item => item.email == emailUser);
        sessionStorage.setItem('infoUser', JSON.stringify(dataUser));
        form.reset();
        window.location.href = './pages/home.html'
      }
      else{
        alert("ESTE USUARIO NO EXISTE EN LA BASE DE DATOS!");
      }
    })
  
  })
