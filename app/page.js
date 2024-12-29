"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import RobotAnimation from "@/components/animations/RobotAnimation";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Annalyzing your skills... Preparing custom challenges...";

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div className="hero min-h-screen bg-base-100 text-neutral-content relative overflow-hidden">
      <div className="hero-content flex flex-col items-center text-center relative z-10">
        {/* Mascot */}
        <RobotAnimation />
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-primary">
          Level Up Your ACT Game.
        </h1>
        <p className="text-lg max-w-xl mb-6 text-neutral-content">
          Conquer challenges, earn rewards, and master the ACT with engaging,
          AI-powered quizzes.
        </p>

        {/* AI Console */}
        <div className="bg-neutral text-accent font-mono p-4 rounded-lg shadow-lg border border-neutral-focus max-w-lg w-full text-left">
          <p>{displayText}</p>
          <span className="animate-blink">|</span>
        </div>

        {/* Call to Action */}
        <div className="mt-6 flex gap-5">
          <Link
            href="/quiz"
            className="btn btn-primary font-bold py-3 px-6 rounded-full pulse-glow shadow-md transition-transform transform hover:scale-105"
          >
            Start Quiz
          </Link>
          <Link
            href="/about"
            className="btn btn-outline font-bold py-3 px-4 rounded-full shadow-md transition-transform transform hover:scale-105"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
