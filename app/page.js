"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

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
      {/* Subtle Background Decorations */}
      <div className="absolute w-16 h-16 bg-yellow-400 rounded-full opacity-20 animate-pulse top-10 left-16"></div>
      <div className="absolute w-24 h-24 bg-teal-400 rounded-full opacity-10 animate-bounce bottom-20 right-20"></div>

      <div className="hero-content flex flex-col items-center text-center relative z-10">
        {/* Mascot */}
        <div className="w-32 h-32 mb-4">
          <img src="/mascot.png" alt="Mascot" className="w-full h-full glow" />
        </div>
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
