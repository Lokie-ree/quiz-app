import React, { useState } from "react";
import QuestionDisplay from "./QuestionDisplay";
import AnswerOptions from "./AnswerOptions";
import ActionButtons from "./ActionButtons";
import Feedback from "./Feedback";
import mockQuestions from "../../data/mockQuestions.json";

const QuizCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const question = mockQuestions[currentIndex];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
    setCurrentIndex((prev) => prev + 1);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    setIsCorrect(selectedOption === question.correctAnswer);
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setIsCorrect(false);
  };

  const isLastQuestion = currentIndex === mockQuestions.length - 1;

  return (
    <div className="w-full max-w-lg p-4 bg-base-300 rounded-lg shadow-lg">
      {/* Question Display */}
      <QuestionDisplay
        questionText={question.question}
        currentIndex={currentIndex + 1}
        totalQuestions={mockQuestions.length}
      />

      {/* Answer Options */}
      <AnswerOptions
        options={question.options}
        onSelect={handleOptionSelect}
        isSubmitted={isSubmitted}
        correctAnswer={question.correctAnswer}
      />

      {/* Feedback */}
      {isSubmitted && (
        <Feedback
          isCorrect={isCorrect}
          correctAnswer={question.correctAnswer}
          explanation={question.explanation}
        />
      )}

      {/* Action Buttons */}
      <ActionButtons
        isLastQuestion={isLastQuestion}
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
