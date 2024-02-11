import React from 'react'

function Score({score}) {
  return (
    <div className="relative">
      <h1 className='absolute text-[80px] left-14 font-bold'>{score}</h1>
      <p className='absolute left-5 top-[7vw] font-bold text-2xl '>Total Score</p>
    </div>
  );
}


export default Score