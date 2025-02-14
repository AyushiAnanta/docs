import React, { useState, useEffect } from 'react';
import Foreground from './Foreground';

const CardContent = ({ cardVal, setShowCard, setCardVal,setShowAddCard }) => {
  const storedData = localStorage.getItem('data');
  let docdata = [];

  const goHome = () => {
    console.log("clickeddddddddddddddddddddddddddddddddddddd");
  
    // Hide CardContent and show Foreground
    setShowCard(false);
    setShowAddCard(false);
  };

  const SaveIt = () => {
    console.log("clickeddddddddddddddddddddddddddddddddddddd");
    
    const newName = name;
    const newContent = content;
  
    let updatedData = docdata.map((item) => 
      item.index === cardVal.index 
        ? { ...item, name: newName, content: newContent } 
        : item
    );
  
    // If no matching index is found, add a new item
    if (!docdata.some((item) => item.index === cardVal.index)) {
      updatedData.push({ index: cardVal.index, name: newName, content: newContent });
    }
  
    console.log(updatedData);
    localStorage.setItem("data", JSON.stringify(updatedData));
  
    // Hide CardContent and show Foreground
    setShowCard(false);
    setShowAddCard(false);
  };
  
   
  
  const [index, setIndex] = useState(null)

  const [content, setContent] = useState('');
  const [name, setName] = useState('');

  try {
    docdata = storedData ? JSON.parse(storedData) : [];
    if (!Array.isArray(docdata)) docdata = [];
  } catch (error) {
    console.error('Error parsing localStorage data:', error);
  }

  useEffect(() => {
    const foundItem = docdata.find((e) => e.index === cardVal?.index);
    if (foundItem) {
      setContent(foundItem.content || '');
      setName(foundItem.name || '');
      setIndex(foundItem.index || -1)
    }
  }, [cardVal]); // Runs when `cardVal` changes

  return (
    <div className='relative w-full h-screen bg-zinc-800'>
      {/* Header Section */}
      <div className='relative'>
        <div className='z-[5] bg-zinc-900/50 h-[100px] flex flex-row justify-between items-center p-4'>
          {/* Title Input */}
          <textarea
            className='h-10 rounded bg-zinc-700 px-3 py-1 text-2xl text-black'
            value={name}
            onChange={(e) => {
              setName(e.target.value)}}
            placeholder='Enter title here...'
          />

          {/* Buttons */}
          <div className='h-[100px] text-lg text-zinc-500 flex flex-row justify-center items-center m-5 '>
            <button 
            onClick={goHome}
            className='px-10 bg-zinc-700 text-black' type='button'>
              Home
            </button>
            <button 
            onClick={SaveIt}
            className='px-10 bg-zinc-700 text-black mx-4' type='button'>
              Save
            </button>
          </div>
        </div>

        {/* Main Text Area */}
        <textarea
          className='fixed z-[3] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            w-4/5 h-4/5 bg-zinc-900/50 tracking-wider text-gray-300 p-10 px-20 mt-16'
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder='Enter content here...'
        />
      </div>
    </div>
  );
};

export default CardContent;
