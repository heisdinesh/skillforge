import React, { useState, useEffect } from "react";
import Question from "@/components/Question";
import { FaRegClock } from "react-icons/fa";
const Clock = () => {
  const [count, setCount] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="absolute flex gap-2 items-center justify-center top-0 right-0 p-4 text-lg font-semibold">
      <FaRegClock />
      <p>{count}</p>
    </div>
  );
};

const Practice = () => {
  return (
    <div className="relative text-gray-950 flex flex-col">
      <Clock />
      <div className="">
        <Question
          question="Who is Dinesh?"
          options={["Dini", "Honey", "Bunny", "Maggi"]}
        />
      </div>
      <div className="bg-gray-200 py-4 flex justify-between items-center px-8">
        <div className="text-lg font-semibold">Score: 0</div>
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg">
          Next
        </button>
      </div>
    </div>
  );
};

export default Practice;
