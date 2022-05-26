function ShowProducts(array, container){
    container.innerHTML= "";
    array.forEach(product => {
        const {id, nombre, precio, tipo_propiedad, ubicacion, cantidad_habitaciones, cantidad_banios, tamanio, img} = product;
        const {url1} = img;

        container.innerHTML += `
        <div class="col-md-6 col-lg-4 mb-4 mb-md-3">
                <div class="card border-0 shadow">
                    <div
                      class="bg-info d-flex align-items-center justify-content-center shadow-1-strong etiqueta">
                      <p class="text-white mb-0 small">For Buy</p>
                    </div>
                    <div
                      class="bg-info d-flex align-items-center justify-content-center shadow-1-strong etiqueta etiqueta2">
                      <p class="text-white mb-3 small">$${precio}/mo</p>
                    </div>
                    
                  <img id=${id} src=${url1}
                    class="card-img-top" alt="Gaming Laptop" />
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <p class="small"><a href="#!" class="text-muted subtitle">${tipo_propiedad}</a></p>
                    </div>
        
                    <div class="mb-3">
                      <h5 class="mb-0 font-ubuntu fs-5">${nombre}</h5>
                    </div>
  
                    <div class="mb-3">
                      <h6 class="mb-0 ubuntu-400 fs-6"><i class="bi bi-geo-alt"></i> ${ubicacion}</h6>
                    </div>
        
                    <div class="d-flex justify-content-between">
                        <div class="d-flex gap-1 align-items-end"><span><img src="/images/beds.png" class="img-align" width="15" height="15" alt="beds" ></span>
                          <p class="mb-0">Beds</p>
                          <span>${cantidad_habitaciones}</span>
                      </div>
                      <div class="d-flex gap-1 align-items-end"><span><img src="/images/bath.png" class="img-align" width="15" height="15" alt="baths" ></span>
                          <p class="mb-0">Baths</p>
                          <span>${cantidad_banios}</span>
                      </div>
                      <div class="d-flex gap-1 align-items-end"><span><img src="/images/scale.png" class="img-align" width="15" height="15" alt="scale" ></span>
                          <p class="mb-0">${tamanio}</p>
                          <span>Sqft</span>
                      </div>                    
                    </div>
                  </div>
                </div>
              </div>`

        
    });
}

export default ShowProducts;