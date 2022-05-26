import { PROPIEDADES_URL } from "./rutas.js"

const GetDataById =  async (id) =>{
    
    let res = await fetch(`${PROPIEDADES_URL}/${id}`);
    let data = await res.json();

    return data;
}

export default GetDataById;