import React from 'react'

const ProductPrice = (props) => {
    const totalValue = props.product.reduce((total, prdct) => {
        return total + prdct.price;
    }, 0);
  return (
    <div>
      Total stock Value: Rs. {totalValue}
    </div>
  )
}

export default ProductPrice
