// src/App.js - Main App component from your original code

import React, { useState } from 'react';
import './App.css';

// Question data
const questions = [
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Saturn", "Mars"],
    correctAnswer: "Jupiter"
  },
  {
    question: "How many planets are in our solar system?",
    options: ["7", "8", "9", "10"],
    correctAnswer: "8"
  },
  {
    question: "Which is the hottest planet in our solar system?",
    options: ["Mercury", "Venus", "Mars", "Jupiter"],
    correctAnswer: "Venus"
  },
  {
    question: "What is the name of Earth's natural satellite?",
    options: ["Sun", "Mars", "Moon", "Europa"],
    correctAnswer: "Moon"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Jupiter", "Venus", "Saturn", "Mars"],
    correctAnswer: "Mars"
  }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answered, setAnswered] = useState(false);

  const handleOptionClick = (option) => {
    if (answered) return;
    
    setSelectedOption(option);
    setAnswered(true);
    
    if (option === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    
    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
        setAnswered(false);
      } else {
        setShowScore(true);
      }
    }, 1500);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
    setAnswered(false);
  };

  const getOptionClass = (option) => {
    if (!answered) return "option";
    if (option === questions[currentQuestion].correctAnswer) return "option correct";
    if (option === selectedOption) return "option incorrect";
    return "option";
  };

  return (
    <div className="app">
      <div className="quiz-container">
        <h1>Space Trivia Challenge</h1>
        {showScore ? (
          <div className="score-section">
            <h2>Quiz Completed!</h2>
            <p>You scored {score} out of {questions.length}</p>
            <button className="restart-button" onClick={resetQuiz}>Play Again</button>
          </div>
        ) : (
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">{questions[currentQuestion].question}</div>
            <div className="options-container">
              {questions[currentQuestion].options.map((option) => (
                <div
                  key={option}
                  className={getOptionClass(option)}
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;