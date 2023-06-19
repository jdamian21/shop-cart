import { useState } from "react";

export const CartList = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
}) => {
  const [active, setActive] = useState(false);

  const onDeleteProduct = (product) => {
    const results = allProducts.filter((item) => item.id !== product.id);

    setTotal(total - product.price * product.quantity);
    setCountProducts(countProducts - product.quantity);
    setAllProducts(results);
  };

  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="f-col-md-4">
      <div className="content-car">
        <div className="content-first">
          <div className="tittle">
            <h2>Lista de productos</h2>
          </div>
          <div className="car-products" onClick={() => setActive(!active)}>
            <div className="count-products">
              <img src="/src/assets/car.png"></img>
              <span id="contador-productos">{countProducts}</span>
            </div>
          </div>
        </div>
    
      <div className="container-icon">

        <div
          className={`container-cart-products ${active ? "" : "hidden-car"}`}
        >
          {allProducts.length ? (
            <>
              <div>
                {allProducts.map((product) => (
                  <div key={product.id}>
                    <div className="info-car-product">
                      <img className="image-product" src={product.urlImage}></img>
                      <span className="quantity-product">
                        Cantidad: <br/>{product.quantity}
                      </span>
                      <p className="name-product">
                        Producto: <br/>{product.nameProduct}
                      </p>
                      <span className="price-product">
                        Precio: <br/>${product.price}
                      </span>
                      <img className="closeImage" src="/src/assets/cancel.svg" onClick={() => onDeleteProduct(product)}></img>
                    </div>
                  </div>
                ))}
              </div>

              <div className="car-total">
                <h3>Total:</h3>
                <span className="total-pagar">${total}</span>
              </div>

              <button className="btn-clear-all" onClick={onCleanCart}>
                Vaciar Carrito
              </button>
              <button type="button" className="waybox-button" onClick={()=> setShowModal(true) }>
            Pagar con Wompi
          </button>
          {showModal && (
            <div className="modal">
              <div className="modal-content">
              <iframe
                  src="https://checkout.wompi.co/p/?public-key=pub_test_XseJ0WZNUmxFHGaaCcmlorrqzOrZEUJL&currency=COP&amount-in-cents=4950000&reference=AXCVBAIDINDINADNI"
                  title="Wompi Checkout"
                ></iframe>
                <button type="button" onClick={()=> setShowModal(false) }>
                  X
                </button>
              </div>
            </div>
          )}
            </>
          ) : (
            <p className="car-empty">El carrito está vacío</p>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};
