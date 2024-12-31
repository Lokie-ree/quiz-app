"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useQuizContext } from "@/app/context/QuizContext";

const ActionButtons = ({
  isLastQuestion,
  onNext,
  onSubmit,
  isSubmitted,
  selectedOption,
}) => {
  const router = useRouter();
  const { quizState, saveAnswer } = useQuizContext();

  const handleFinishedQuiz = () => {
    saveAnswer(
      quizState.questions[quizState.currentIndex],
      selectedOption,
      selectedOption ===
        quizState.questions[quizState.currentIndex].correctAnswer
    );

    router.push("/results");
  };

  return (
    <div className="flex justify-between mt-4">
      {isSubmitted ? (
        <button
          className={`btn w-full ${
            selectedOption ? "btn-accent" : "btn-disabled"
          }`}
          onClick={() => {
            if (isLastQuestion) {
              handleFinishedQuiz();
            } else {
              onNext();
            }
          }}
          disabled={!selectedOption}
        >
          {isLastQuestion ? "Finish Quiz" : "Next Question"}
        </button>
      ) : (
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
