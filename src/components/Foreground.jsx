import React, { useRef, useState } from "react";
import Card from "./Card";
import AddCard from "./AddCard";

const Foreground = ({ setShowCard, setShowAddCard, cardVal, setCardVal}) => {
  const ref = useRef(null);

  const colorList = [
     "bg-blue-600", "bg-blue-900", "bg-red-900",
    "bg-yellow-600", "bg-yellow-800", "bg-purple-600", "bg-purple-800",
    "bg-indigo-600", "bg-indigo-900", "bg-pink-900", 
     "bg-lime-600", "bg-lime-900",
    "bg-emerald-900", "bg-rose-900", "bg-sky-600", "bg-sky-900"
  ];
  
  // Get data from localStorage
  const storedData = localStorage.getItem("data");
  let docdata = [];

  try {
    docdata = storedData ? JSON.parse(storedData) : [];
    if (!Array.isArray(docdata)) docdata = [];
  } catch (error) {
    console.error("Error parsing localStorage data:", error);
  }

    console.log(docdata.length)
    const [docLen, setDocLen] = useState(docdata.length)

  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex flex-row flex-wrap bg-[url('src/assets/background.png')] bg-cover bg-center">
      {docdata.map(({ name }, index) => (
        <Card
          
          
          key={index}
          text={name}
          color={colorList[Math.floor(Math.random() * colorList.length)]}
          dragConstraints={ref}
          onClick={() => {
            setCardVal({index});
            setShowCard(true);
            console.log(index)
          }}
           // Clicking replaces Foreground with CardContent
            
        />
      ))}
      <AddCard 
      onClick={() => {
        setCardVal({ index: docLen + 1 })
        setShowAddCard(true)
        

      }
      } /> {/* Clicking replaces Foreground with Page */}
    </div>
  );
};

export default Foreground;
