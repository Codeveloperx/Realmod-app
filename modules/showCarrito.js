function ShowCarrito(array, contenedor) {
  contenedor.innerHTML = "";
  array.forEach((product_Card) => {
    const { id, nombre, tipo_propiedad, precio, img } = product_Card;
    const { url1 } = img;
    contenedor.innerHTML += `
        <tr>
                              <td data-th="Product">
                                  <div class="row">
                                      <div class="col-md-3 text-left">
                                          <img src=${url1} alt="" class="img-fluid d-none d-md-block rounded mb-2 shadow ">
                                      </div>
                                      <div class="col-md-9 text-left mt-sm-2">
                                          <h4>${nombre}</h4>
                                          <p class="font-weight-light">${tipo_propiedad}</p>
                                      </div>
                                  </div>
                              </td>
                              <td data-th="Price">$${precio}</td>
                              <td data-th="Quantity">
                                  <input type="number" class="form-control form-control-lg text-center" value="1">
                              </td>
                              <td class="actions" data-th="">
                                  <div class="text-right">
                                      <button id=${id} class="eliminar btn btn-white bg-danger border-secondary bg-danger btn-md mt-1">
                                      <i class="bi bi-trash3 text-white"></i>
                                      </button>
                                  </div>
                              </td>
                          </tr>`;
  });

}

export default ShowCarrito;
