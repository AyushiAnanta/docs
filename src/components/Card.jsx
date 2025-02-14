import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const Card = ({ color, dragConstraints,text, onClick }) => {
  return (
    <div>
      
        <motion.div
          drag
          dragConstraints={dragConstraints}
          onClick={onClick}
          className="relative text-zinc-500 w-48 h-56 rounded-[36px] overflow-hidden bg-zinc-900 m-5 p-10"
        >
          <FaRegFileAlt />
          <p className="text-sm mt-5 font-semibold">
            {text}
          </p>
          <div className="mt-5 flex flex-row justify-between">
            <h5 className="text-sm text-zinc-600">0.4mb</h5>
            <FaDownload />
          </div>
          <div
            className={`footer absolute bottom-0 w-full h-10 left-0 ${color}`}
          ></div>
        </motion.div>
      
    </div>
  );
};

export default Card;
