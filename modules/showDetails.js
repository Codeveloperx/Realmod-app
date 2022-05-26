function ShowDetails(array, container){
    container.innerHTML = "";
    array.forEach(details => {
        const {id, nombre, precio, tipo_propiedad, ubicacion, cantidad_habitaciones, cantidad_banios, tamanio, img} = details;
        const {url1, url2, url3, url4} = img;
        container.innerHTML += `
        <div class="card">
        <div class="row g-0">
          <div class="col-md-6 border-end">
            <div class="d-flex flex-column justify-content-center">
              <div class="main_image">
                <img
                  src=${url1}
                  id="main_product_image"
                  width="350"
                />
              </div>
              <div class="thumbnail_images">
                <ul id="thumbnail">
                  <li>
                    <img onclick="changeImage(this)" src=${url1} width="30"/>
                  </li>
                  <li>
                    <img onclick="changeImage(this)" src=${url2} width="30"/>
                  </li>
                  <li>
                    <img onclick="changeImage(this)" src=${url3} width="30" />
                  </li>
                  <li>
                    <img onclick="changeImage(this)" src=${url4} width="30"/>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="p-3 right-side">
              <div class="d-flex justify-content-between align-items-center">
                <h3>${nombre}</h3>
                <span id=${id} class="heart bg-green"><i class="bi bi-heart-fill"></i></span>
              </div>
              <div class="mt-2 pr-3 content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>
              <h3>$${precio}</h3>
              <div class="ratings d-flex flex-row align-items-center">
                <div class="d-flex flex-row">
                  <i class="bx bxs-star"></i> <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i> <i class="bx bxs-star"></i>
                  <i class="bx bx-star"></i>
                </div>
                <span>441 reviews</span>
              </div>
              <div class="buttons d-flex flex-row mt-5 gap-3">
                <button class="btn btn-outline-dark">Buy Now</button>
                <button id=${id} class="btn bg-green add-carrito">Add to Cart</button>
              </div>
              <div class="search-option">
              <span>
              <p>Ver mas</p>
              <p><i class="bi bi-arrow-down-circle-fill"></i><p/>
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>`
        
    });

}

export default ShowDetails;