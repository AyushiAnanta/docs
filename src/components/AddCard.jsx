import React from 'react';
import { FaPlus } from "react-icons/fa";

const AddCard = ({ onClick }) => {
  return (
    <div 
      className="absolute bottom-0 right-0 text-zinc-500 w-48 h-56 rounded-[36px] overflow-hidden bg-zinc-900 m-5 p-10 py-14 flex items-center justify-center cursor-pointer"
      onClick={onClick} // ✅ Correctly uses the passed onClick function
    >
      <FaPlus size="7em" />
    </div>
  );
};

export default AddCard;
