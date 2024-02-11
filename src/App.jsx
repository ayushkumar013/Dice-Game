import React, { useState } from 'react';
import Start from './components/Start';
import Game from './components/Game'; 

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggling = () => {
    setIsPlaying(prevState => !prevState);
  };

  return (
    <>
    {
      isPlaying?<Game />:<Start toggle=
      {toggling} />
    }
      
    </>
  );
}

export default App;

