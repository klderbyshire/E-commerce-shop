import React from 'react';
import Basket from '../Basket/basket.js';

function Cards({title, image, price, id, addToBasket}) {
    return (
    <div className='cards'>
        <h3>{title}</h3>
        <img className='product-images' src={image} alt={title}/>
        <h4>£{price}</h4>
        <button className="cardbutton" onClick={() => addToBasket(id)}>Add to basket</button>
    </div>
  )
}

export default Cards