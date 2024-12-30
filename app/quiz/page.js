"use client";

import QuizCard from "@/components/quiz-card/QuizCard";
import RobotAnimation from "@/components/animations/RobotAnimation";
import { QuizProvider } from "../context/QuizContext";

const page = () => {
  return (
    <div className="h-screen bg-base-200 px-4 flex flex-col items-center justify-center">
      <RobotAnimation />
      <QuizProvider>
        <QuizCard />
      </QuizProvider>
    </div>
  );
};

export default page;
