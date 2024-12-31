"use client";

import React, { createContext, useState, useContext } from "react";
import mockQuestions from "../../data/mockQuestions.json";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [quizState, setQuizState] = useState({
    currentIndex: 0,
    userAnswers: [],
    questions: mockQuestions,
  });

  const saveAnswer = (question, userAnswer, isCorrect) => {
    setQuizState((prev) => {
      const updatedAnswers = [...prev.userAnswers];
      updatedAnswers[prev.currentIndex] = { question, userAnswer, isCorrect };

      return {
        ...prev,
        userAnswers: updatedAnswers,
      };
    });
  };

  const resetQuiz = () => {
    setQuizState({
      currentIndex: 0,
      userAnswers: [],
      questions: mockQuestions,
    });
  };

  return (
    <QuizContext.Provider
      value={{ quizState, setQuizState, saveAnswer, resetQuiz }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => useContext(QuizContext);
