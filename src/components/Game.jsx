import React, { useState } from 'react';
import Score from './Score'
import Choice from './Choice'
import Dice from './Dice';

function Game() {
  const [score,Setscore]=useState(0);
  
  const [SelectNumber,SetSelectNumber]=useState(null);
  
  const [currentDice, setCurrentDice] = useState(1);
const [error,seterror]=useState("");


  const generateNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const roll = () => {
    if(!SelectNumber) {
      seterror("You have not selected any number.");
      return;
    }
    const random = generateNumber(1, 7);
    setCurrentDice((prev) => random);
    
    if(SelectNumber===random){
      Setscore(prev => prev+random);
    }
    else{
      Setscore(prev => prev-random)
    }
    SetSelectNumber(undefined);
  };

  const resetScore =()=>{
    Setscore(0);
  }
  return (
    <>
   <Score score={score}/>
   <Choice error={error}
   seterror={seterror}
   SelectNumber={SelectNumber}
   SetSelectNumber={SetSelectNumber}/>
   <Dice reset={resetScore}
   currentDice={currentDice}
   roll={roll}/>
   
    </>
  )
}

export default Game