"use client";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

const mockQuestions = [
  {
    title: "Do you get paid bi-weekly or weekly?",
    answers: ["Bi-Weekly", "Weekly"],
  },
  {
    title: "How much do you gross per week?",
    placeholder: "Enter amount",
  },
  {
    title: "How much do you pay in rent per month?",
    placeholder: "Enter amount",
  },
  {
    title: "How much do you pay in car insurance per month?",
  },
  {
    title: "How much do you pay in car payments per month?",
  },
  {
    title: "How much do you pay in student loans per month?",
  },
  {
    title: "How much do you pay in credit card debt per month?",
  },
  {
    title: "How much do you pay in utilities per month?",
  },
  {
    title: "How much do you pay in groceries per month?",
  },
  {
    title: "How much do you pay in gas per month?",
  },
  {
    title: "How much do you pay in entertainment per month?",
  },
  {
    title: "How much do you pay in childcare per month?",
  },
  {
    title: "How much do you pay in other expenses per month?",
  },
];

const styledInput = {
  width: "550px",
  background: "none",
  border: "none",
  borderBottom: "1px solid white",
  // remove outline
  outline: "none",
  // increase input text size
  fontSize: "1.5rem",
  marginTop: "1.8rem",
};

type QuestionProps = {
  question?: {
    title: string;
    answers: string[];
    correctAnswer: string;
  };
  index?: number;
  onAnswer?: (answer: string) => void;
};

const Question: React.FC<QuestionProps> = () => {
  const [, setSelectedAnswer] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setIsAnswered(true);
    setIndexQuestion(indexQuestion + 1);
  };

  const handleInput = (value: string) => {
    setInputValue(value);
  };

  const handleInputAnswer = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnswered(true);
    setInputValue("");
    setIndexQuestion(indexQuestion + 1);
  };

  return (
    mockQuestions[indexQuestion] && (
      <div className="container flex items-center justify-between">
        <div className="question ">
          <p
            className={`text-sm font-bold ${
              isAnswered ? "text-gray-400" : "text-white"
            }`}
          >
            Question {indexQuestion + 1}
          </p>
          <h2
            className="question-title
        text-3xl font-bold text-white
        "
          >
            {mockQuestions[indexQuestion]?.title}
          </h2>
        </div>

        {/* Yes box */}
        <div className="answer w-100 flex-col justify-center">
          <div>
            {mockQuestions[indexQuestion]?.answers ? (
              mockQuestions[indexQuestion]?.answers?.map((answer) => (
                <button
                  className={`my-8 flex h-16 w-96 items-center justify-center rounded-full border ${
                    isAnswered ? "text-gray-400" : "text-white"
                  }`}
                  style={{
                    border: "1px solid white",
                    fontSize: "1.5rem",
                    transition: "all 0.2s ease-in-out",
                  }}
                  onClick={() => handleAnswer(answer)}
                >
                  {answer}
                </button>
              ))
            ) : (
              <div className="answer relative">
                <form onSubmit={handleInputAnswer}>
                  <Input
                    style={styledInput}
                    type="text"
                    placeholder="Answer"
                    onChange={(e) => handleInput(e.target.value)}
                    value={inputValue}
                  />

                  {/* setup button to hit enter to submit */}
                  <button type="submit" />
                </form>
                {/* hit enter to submit span */}
                {inputValue.length > 0 && (
                  <p className="absolute right-0 text-xs text-gray-400">
                    Press <strong>ENTER</strong> to Submit
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default Question;
