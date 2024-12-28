import React from "react";

const Feedback = ({ isCorrect, correctAnswer, explanation }) => {
  return (
    <div
      className={`mt-4 p-3 rounded-lg text-white ${
        isCorrect ? "bg-primary" : "bg-error"
      }`}
    >
      {isCorrect ? (
        <p>
          🎉 <strong>Correct!</strong> Great job, you nailed it!
        </p>
      ) : (
        <p>
          ❌ <strong>Incorrect.</strong> The correct answer is{" "}
          <span className="font-bold">{correctAnswer}</span>
          <br />
          <span className="mt-1 block">{explanation}</span>
        </p>
      )}
    </div>
  );
};

export default Feedback;
