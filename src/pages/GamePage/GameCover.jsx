import React from 'react'

const GameCover = ({image}) => {
  return (
    <img className='rounded-lg mb-4 w-full sm:max-w-[300px] object-contain' src={image} alt="img" />
  )
}

export default GameCover
