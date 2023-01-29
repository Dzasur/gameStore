import React from 'react'
import GameContent from './GameContent'
import GameCover from './GameCover'
import Button from '../HomePage/Button'

const GamePage = () => {
  const game = JSON.parse(localStorage.getItem("game"))
  return (
    <section className='h-screen  mb-44'>
        <h2 className='text-3xl font-medium mb-5'>{game.title}</h2>
        <div className=' md:flex'>
          <GameContent game={game}/>
          <div className='md:w-[30%] relative sm:mt-7 md:mt-0 sm:gap-4 flex flex-col items-center'>
            <GameCover image={game.image}/>
            <p className='opacity-70 pb-7 max-w-[300px]'>{game.description}</p>
            <Button game={game}/>
          </div>
        </div>
    </section>
  )
}

export default GamePage
