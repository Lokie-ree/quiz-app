import React from "react";

const ActionButtons = ({
  isLastQuestion,
  onNext,
  onSubmit,
  onReset,
  isSubmitted,
  selectedOption,
}) => {
  return (
    <div className="flex justify-between mt-4">
      {isSubmitted ? (
        // Show "Next" or "Submit" after feedback
        <button
          className={`btn w-full ${
            selectedOption ? "btn-accent" : "btn-disabled"
          }`}
          onClick={isLastQuestion ? onReset : onNext}
          disabled={!selectedOption}
        >
          {isLastQuestion ? "Finish Quiz" : "Next Question"}
        </button>
      ) : (
        // Show "Submit" before feedback
        <button
          className={`btn w-full ${
            selectedOption ? "btn-primary" : "btn-disabled"
          }`}
          onClick={onSubmit}
          disabled={!selectedOption}
        >
          Submit Answer
        </button>
      )}
    </div>
  );
};

export default ActionButtons;
