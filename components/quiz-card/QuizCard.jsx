"use client";

import React, { useState } from "react";
import { useQuizContext } from "@/app/context/QuizContext";
import QuestionDisplay from "./QuestionDisplay";
import AnswerOptions from "./AnswerOptions";
import ActionButtons from "./ActionButtons";

const QuizCard = () => {
  const { quizState, saveAnswer, setQuizState } = useQuizContext();
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentIndex = quizState.currentIndex;
  const question = quizState.questions[currentIndex];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleNext = () => {
    if (!selectedOption) {
      saveAnswer(question);
    } else {
      saveAnswer(
        question,
        selectedOption,
        selectedOption === question.correctAnswer
      );
    }

    // Reset local state
    setSelectedOption(null);
    setIsSubmitted(false);

    // Update context state to move to the next question
    setQuizState((prev) => ({
      ...prev,
      currentIndex: prev.currentIndex + 1,
    }));
  };

  const handleReset = () => {
    setQuizState((prev) => ({
      ...prev,
      currentIndex: 0,
      userAnswers: [],
    }));
    setSelectedOption(null);
    setIsSubmitted(false);
  };

  if (!question) {
    return <p>Quiz Completed!</p>;
  }

  return (
    <div className="w-full max-w-lg p-4 bg-base-300 rounded-lg shadow-lg">
      {/* Question Display */}
      <QuestionDisplay
        questionText={question.question}
        currentIndex={currentIndex + 1}
        totalQuestions={quizState.questions.length}
      />

      {/* Answer Options */}
      <AnswerOptions
        options={question.options}
        onSelect={handleOptionSelect}
        isSubmitted={isSubmitted}
        correctAnswer={question.correctAnswer}
      />

      {/* Action Buttons */}
      <ActionButtons
        isLastQuestion={currentIndex === quizState.questions.length - 1}
        onNext={handleNext}
        onSubmit={handleSubmit}
        onReset={handleReset}
        isSubmitted={isSubmitted}
        selectedOption={selectedOption}
      />
    </div>
  );
};

export default QuizCard;
