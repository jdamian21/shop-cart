import { data } from "../data";
export const ProductList = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  const onAddProduct = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setTotal(total + product.price * product.quantity);
      setCountProducts(countProducts + product.quantity);
      return setAllProducts([...products]);
    }

    setTotal(total + product.price * product.quantity);
    setCountProducts(countProducts + product.quantity);
    setAllProducts([...allProducts, product]);
  };

  console.log(allProducts);
  return (
    <div className="f-col-md-8 order-column-mobile">
      <div className="content-cards">
        <div className="rowF">
          {data.map((product) => (
            <div className="f-col-md-6" key={product.id}>
              <div className="item">
                <div>
                  <img src={product.urlImage} alt={product.nameProduct} />
                </div>
                <div className="info-product">
                  <h2>{product.nameProduct}</h2>
                  <p className="price">${product.price}</p>
                  <button onClick={() => onAddProduct(product)}>
                    Añadir al carrito
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
