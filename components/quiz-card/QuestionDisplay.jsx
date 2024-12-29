import React from "react";

const QuestionDisplay = ({ questionText, currentIndex, totalQuestions }) => {
  return (
    <div className="w-full p-4 bg-base-100 rounded-lg shadow-lg mb-4 border border-neutral">
      {/* Progress Bar */}
      <div className="relative w-full h-1 bg-neutral rounded-full mb-3">
        <div
          className="absolute top-0 left-0 h-1 bg-accent rounded-full"
          style={{ width: `${(currentIndex / totalQuestions) * 100}%` }}
        ></div>
      </div>

      {/* Progress Text */}
      <div className="flex justify-between text-sm text-secondary mb-2">
        <span className="font-medium">{`Question ${currentIndex} of ${totalQuestions}`}</span>
      </div>

      {/* Question Text */}
      <h2 className="text-lg font-bold text-primary">{questionText}</h2>
    </div>
  );
};

export default QuestionDisplay;
