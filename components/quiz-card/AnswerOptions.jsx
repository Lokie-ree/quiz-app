"use client";

import React, { useState } from "react";

const AnswerOptions = ({ options, onSelect, isSubmitted, correctAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    if (!isSubmitted) {
      setSelectedOption(option);
      onSelect(option);
    }
  };

  return (
    <div className="w-full flex flex-col space-y-3">
      {options.map((option, index) => {
        const isCorrect = isSubmitted && option === correctAnswer;
        const isWrong =
          isSubmitted && option === selectedOption && option !== correctAnswer;
        const isSelected = option === selectedOption;

        return (
          <button
            key={index}
            className={`w-full p-3 text-left rounded-lg border transition-all ${
              isSubmitted
                ? isCorrect
                  ? "bg-primary text-white border-primary"
                  : isWrong
                  ? "bg-error text-white border-error"
                  : "bg-base-100 border-neutral"
                : isSelected
                ? "bg-accent text-white border-accent"
                : "bg-base-100 border-neutral"
            } hover:bg-accent hover:text-white`}
            onClick={() => handleSelect(option)}
            disabled={isSubmitted}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default AnswerOptions;
