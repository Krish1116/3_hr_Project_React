import { useState } from 'react';
import './App.css';
import ProductForm from './Components/ProductForm';

function App() {
  const [product, setProduct] = useState([]);

  const addProduct = (newProduct) => {
    setProduct([...product, newProduct]);
  }
  return (
    <div className="App">
      <ProductForm product={product} onAddProduct={addProduct}/>
    </div>
  );
}

export default App;
