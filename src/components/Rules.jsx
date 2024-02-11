import React from 'react'

function Rules() {
  return (
    <div className='absolute rounded-[15px] p-2 bg-gradient-to-r from-pink-500 to-yellow-500  w-[30vw] top-[5rem] left-[57rem]'>
        <h2 className='font-extrabold text-2xl underline underline-offset-2'>How to play the game:
        </h2>
        <p className='m-2'>Select any number.</p>
        <p className='m-2'>Click on dice image after click on dice if selected number 
          is equal to dice number you
          will get same point as dice.</p>
        <p className='m-2'>If you get wrong guess then 2 point will be dedcuted </p>

    </div>
  )
}

export default Rules