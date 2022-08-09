import React from 'react'

function Product({product,setBasket,basket}) {
  function addtoBasket(){
    //sepetin içinde o ürün varmı sorarak öğreniyoruz
    const addFind = basket.find(inbasket => inbasket.id === product.id)
    if(addFind)
    {
      addFind.amount += 1;
      setBasket([...basket.filter(inbasket => inbasket.id !== product.id),{
        id : product.id,
        name: product.name,
        img : product.img,
        price  : product.price,
        amount : addFind.amount
      }])
    }
    else
    {
      setBasket([...basket,{
        id : product.id,
        name: product.name,
        price: product.price,
        img : product.img,
        amount : 1

      }])
    }
  }
  return (
    
    <div className='product-card'>
        <img src={product.img} alt="" className='product-image' />
        <p className='product-name'>{product.name}</p>
        <p className='product-name'>{product.price} TL</p>
        <button className='add-btn' onClick={addtoBasket}>Sepete Ekle</button>
    </div>
  )
}

export default Product