import React from 'react'

const CartItem = ({game}) => {
  return (
    <div className='flex justify-between'>
      <span>{game.title}</span>
      <span>{game.price} руб.</span>
    </div>
  )
}

export default CartItem
