import React from 'react'
import { useSelector } from 'react-redux'
import OrderItem from './OrderItem'

const OrderPage = () => {
    const items = useSelector(s => s.cart.itemsInCart)
  const totalReduce = items.reduce((acc, game) => (acc += game.price), 0);
  console.log(items)
  return (
    <section>
      {items.map(game => <OrderItem key={game.id} game={game}/>)}
      <div className='flex justify-end'>
        <span className='text-3xl font-bold'>{totalReduce} руб.</span>
      </div>
    </section>
  )
}

export default OrderPage
