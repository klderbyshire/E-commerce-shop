import React from 'react'

function Cards({title, image, price, id}) {
    return (
    <div className='cards'>
        <h3>{title}</h3>
        <img className='product-images' src={image} alt={title}/>
        <h4>£{price}</h4>
        {/* <button onClick={() => addToBasket(id)}>Add to basket</button> */}
    </div>
  )
}

export default Cards