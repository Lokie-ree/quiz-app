"use client";

import React, { useState } from "react";

const AnswerOptions = ({ options, onSelect, isSubmitted }) => {
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
        const isSelected = option === selectedOption;

        return (
          <button
            key={index}
            className={`w-full p-3 text-left rounded-lg border transition-all ${
              isSelected
                ? "text-white border-accent"
                : "bg-base-100 border-neutral"
            } hover:bg-neutral hover:text-white`}
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
