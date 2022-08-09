import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Basket from './components/Basket';
import products from './Product.json';
function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const [basket, setBasket] = useState([])
  const [cost,setCost] = useState("");


  useEffect(() => {
    const toplamFiyat = basket.reduce((pre,basket) => pre +(basket.amount*basket.price),0);
    setCost(toplamFiyat)
  },[basket])
  console.log(count)
  return (
    
    <div>
      <div>
          <Header />
          <hr id='hr-header'/>
          <Navbar />
      </div>
      <div className='main-product'>
        <div id='category-page'>
          <h1 id='category-title'>Kategoriler</h1>
          <hr />
          <button className='category-btn' id='men-btn' onClick={() => (
            setCount(0),
            setCount2(4)
          )}>Men</button>
          <br />
          <br />
          <button className='category-btn' onClick={() => (
            setCount(3),
            setCount2(8)
          )}>Women</button>
        </div>
        <div id='product-page'>
            <div id='product-page-card'>
              {
                products.filter(product => product.id > count && product.id < count2).map(product => (
                  <Product product={product} basket={basket} setBasket={setBasket} />
                ))
              }
            </div>
        </div>
      </div>
      <div className='basket-sepet'>
        
        <h1 id='sepet-title'>Sepet({basket.length})</h1>
        <button className='clear-btn' onClick={() => setBasket([])}>Sepeti Temizle</button>
        <p id='cost'>Toplam Tutar: {cost}</p>
        <Basket basket={basket} setBasket={setBasket}/>
      </div>
    </div>
  );
}

export default App;
