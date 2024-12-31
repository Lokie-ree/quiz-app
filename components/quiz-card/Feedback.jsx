import React from "react";

const Feedback = ({ isCorrect, correctAnswer, explanation }) => {
  return (
    <div className="mt-4 rounded-lg text-white">
      {isCorrect ? (
        <p className="text-success mb-2">
          <strong>Correct!</strong> Great job, you nailed it!
        </p>
      ) : (
        <p className="text-error mb-2">
          <strong>Incorrect.</strong> The correct answer is{" "}
          <span className="font-bold">{correctAnswer}.</span>
          <span className="mt-4 block text-neutral-content">{explanation}</span>
        </p>
      )}
    </div>
  );
};

export default Feedback;
