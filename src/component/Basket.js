import React from 'react'

function basket({basket,setBasket}) {
    
  return (
    <div>
      {
        basket.map(item => (
          <div>
            <div className='basket-card'>
              <img src={item.img} alt="" className='basket-image'/>
              <div>
                  <p id='product-cart-name'>{item.name}</p>
                  <p id='product-price'> {item.price*item.amount} TL </p>
              </div>
            </div>
            <div>
            </div>
          </div>
        ))
      }
    </div>

  )
}

export default basket