import React from "react";

const Product = (props) => {
  return (
    <div>
      {props.item.map((pdct, idx) => (
        <ul key={idx}>
          <div className="mt-5">
            {pdct.name} - Rs. {pdct.price}
          </div>
        </ul>
      ))}
    </div>
  );
};

export default Product;
