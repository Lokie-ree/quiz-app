"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useQuizContext } from "../context/QuizContext";
import Feedback from "@/components/quiz-card/Feedback";

const page = () => {
  const { quizState, resetQuiz } = useQuizContext();
  const { userAnswers, questions } = quizState;
  const router = useRouter();

  const correctAnswersCount = userAnswers.filter(
    (answer) => answer?.isCorrect
  ).length;

  const handleRetryQuiz = () => {
    resetQuiz();
    router.push("/quiz");
  };

  const handleGoHome = () => {
    resetQuiz();
    router.push("/");
  };

  return (
    <div className=" px-4 flex flex-col justify-center items-center mt-8">
      <div className="w-full max-w-2xl mx-auto bg-base-300 rounded-lg shadow-lg p-4 mb-8">
        {/* Score Summary */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-center">Quiz Results</h1>
          <p className="text-lg text-center">
            You scored {correctAnswersCount} out of {questions.length}.
          </p>
          <p className="text-lg text-center">
            Score: {((correctAnswersCount / questions.length) * 100).toFixed(2)}
            %
          </p>
        </div>

        {/* Detailed Feedback */}
        <div className="space-y-4">
          {questions.map((question, index) => {
            const userAnswer = userAnswers[index] || {};
            const isCorrect = userAnswer.isCorrect || false;
            const userSelectedAnswer =
              userAnswer.userAnswer || "No answer provided";

            return (
              <div
                key={index}
                className="p-4 rounded-lg border border-primary "
              >
                <h2 className="font-bold text-lg">
                  {index + 1}. {question.question}
                </h2>

                {/*  Display User's Answer */}
                <p className="mt-2">
                  <strong>Your answer:</strong> {userSelectedAnswer}
                </p>

                {/* Feedback Component */}
                <Feedback
                  isCorrect={isCorrect}
                  correctAnswer={question.correctAnswer}
                  explanation={question.explanation}
                />
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <button onClick={handleRetryQuiz} className="btn btn-accent">
            Retry Quiz
          </button>
          <button onClick={handleGoHome} className="btn btn-primary">
            Return Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
