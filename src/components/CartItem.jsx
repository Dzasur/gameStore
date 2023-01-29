import React from 'react'

const CartItem = ({game}) => {
  return (
    <div className='flex justify-between items-end'>
      <span className='max-w-[170px]'>{game.title}</span>
      <span>{game.price} руб.</span>
    </div>
  )
}

export default CartItem
