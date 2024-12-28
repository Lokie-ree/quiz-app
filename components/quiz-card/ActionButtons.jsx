import React from "react";

const ActionButtons = ({
  isLastQuestion,
  onNext,
  onSubmit,
  onReset,
  isSubmitted,
}) => {
  return (
    <div className="flex justify-between mt-4">
      {/* Reset Button */}
      {isSubmitted && (
        <button className="btn btn-neutral" onClick={onReset}>
          Reset
        </button>
      )}

      {/* Navigation Buttons */}
      {!isSubmitted && (
        <button
          className={`btn ${isLastQuestion ? "btn-primary" : "btn-accent"}`}
          onClick={isLastQuestion ? onSubmit : onNext}
        >
          {isLastQuestion ? "Submit" : "Next"}
        </button>
      )}
    </div>
  );
};

export default ActionButtons;
