
import React, { useState } from 'react';
import Foreground from './Foreground';
import CardContent from './CardContent';

const Home = () => {
  const [showCard, setShowCard] = useState(false);
  const [showAddCard, setShowAddCard] = useState(false);
  const [cardVal,setCardVal] = useState(null);
  

  return (
    <div className='relative w-full h-screen bg-zinc-800'>
      {showCard ? (
        <CardContent 
        setShowCard={setShowCard}
        setCardVal={setCardVal}
        setShowAddCard={setShowAddCard}
        cardVal={cardVal} />
      ) : showAddCard ? (
        <CardContent
        setShowCard={setShowCard}
        setCardVal={setCardVal}
        setShowAddCard={setShowAddCard}
        cardVal={cardVal} 
        />
      ) : (
        <Foreground
          cardVal={cardVal}

          setShowCard={setShowCard}
          setCardVal={setCardVal}
          setShowAddCard={setShowAddCard}
        />
      )}
    </div>
  );
};

export default Home;
