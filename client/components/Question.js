import React, { useEffect, useState } from "react";

import { FaRegClock } from "react-icons/fa";

const Question = ({ question, options, onOptionSelect, flag, timeLeft }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
  ];

  useEffect(() => {
    if (flag) {
      setSelectedOption(null);
    }
  }, [flag]);

  // const handleOptionClick = (optionIndex) => {
  //   setSelectedOption(optionIndex);
  // };
  const handleOptionClick = (optionIndex) => {
    setSelectedOption(optionIndex);
    // Call the callback function with the selected option
    onOptionSelect(optionIndex);
  };
  return (
    <div className="min-h-screen text-gray-950 flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-gray-100 border-0 text-lg font-semibold flex items-center justify-end gap-2 w-full mr-10">
        <FaRegClock /> {timeLeft} seconds left
      </div>
      <div className="max-w-3xl w-full mx-auto p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center">{question}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white">
          {options.map((option, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg shadow-md flex flex-col justify-center items-center cursor-pointer ${
                colors[index % colors.length]
              }`}
              onClick={() => handleOptionClick(index)}
            >
              <div
                className={`rounded-full border border-white mb-4 w-12 h-12 flex items-center justify-center ${
                  selectedOption === index ? "bg-green-500" : "bg-white"
                }`}
              >
                {selectedOption === index && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="check-mark-icon w-6 h-6 text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 8.293a1 1 0 011.414 0L9 10.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
              <div className="text-xl font-bold">{option}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
