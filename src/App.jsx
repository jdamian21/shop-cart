import { useState } from "react";
import { CartList } from "./components/CartList";
import { ProductList } from "./components/ProductList";
function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  return (
    <div className="content-all">
      <div className="header">
        <h1> Mini Market</h1>
        
      </div>
      <div className="content-main">
        <div className="container">
          <div className="rowF">
            <ProductList
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              total={total}
              setTotal={setTotal}
              countProducts={countProducts}
              setCountProducts={setCountProducts}
            />
            <CartList
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              total={total}
              setTotal={setTotal}
              countProducts={countProducts}
              setCountProducts={setCountProducts}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
