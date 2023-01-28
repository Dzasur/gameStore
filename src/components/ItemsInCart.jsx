import React from 'react'

const ItemsInCart = ({quantity = 0}) => {
  return quantity > 0 ? (
    <div className='w-5 h-5 absolute -top-2 left-5 text-sm bg-red-500 rounded-2xl text-center'>
      {quantity}
    </div>
  ) : null
}

export default ItemsInCart
