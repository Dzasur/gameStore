import React from 'react'

const GameContent = ({game}) => {
  return (
    <>
      <div className='md:w-[70%] w-full sm:flex md:block justify-center'>
        <iframe className='rounded-lg' src={game.video} width="90%" height="300px" title='YouTube video player'></iframe>
      </div>
    </>
  )
}

export default GameContent
