import React, { useState } from "react";
import Product from "./Product";
import ProductPrice from "./ProductPrice";

const ProductForm = (props) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const addProduct = () => {
    if (productName && productPrice) {
      const newProduct = {
        name: productName,
        price: Number(productPrice),
      };

      props.onAddProduct(newProduct);

      setProductName('');
      setProductPrice("");
    }
  };

  return (
    <div>
      <h1 className="mt-5">Seller Admin Page</h1>
      <div className="form-floating mx-auto w-50 mb-3 mt-5">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <label htmlFor="floatingInput">Product Name</label>
      </div>
      <div className="form-floating mx-auto w-50">
        <input
          type="number"
          className="form-control"
          id="floatingPassword"
          placeholder="price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <label htmlFor="floatingPassword">Price</label>
      </div>

      <div className="d-grid gap-2 mt-3">
        <button className="btn btn-primary mx-auto w-50 mt-2" onClick={addProduct}>
          Add Product
        </button>
      </div>
      <Product item={props.product}/>
      <ProductPrice product={props.product}/>
    </div>
  );
};

export default ProductForm;
