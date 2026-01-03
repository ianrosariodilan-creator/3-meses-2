
import React, { useState } from 'react';
import { QUIZ_DATA } from './constants';
import type { QuizQuestion } from './types';
import QuizCard from './components/QuizCard';
import Conclusion from './components/Conclusion';
import BatIcon from './components/BatIcon';

const App: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < QUIZ_DATA.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const startQuiz = () => {
    setQuizStarted(true);
  };
  
  const BatDecorations: React.FC = () => (
    <>
      <div className="absolute top-[5%] left-[10%] opacity-30 text-purple-400 transform -rotate-12">
        <BatIcon className="w-12 h-12" />
      </div>
      <div className="absolute top-[15%] right-[8%] opacity-20 text-pink-300 transform rotate-12">
        <BatIcon className="w-16 h-16" />
      </div>
       <div className="absolute bottom-[25%] left-[5%] opacity-40 text-purple-300 transform rotate-6">
        <BatIcon className="w-8 h-8" />
      </div>
      <div className="absolute bottom-[10%] right-[12%] opacity-30 text-pink-400 transform -rotate-6">
        <BatIcon className="w-14 h-14" />
      </div>
      <div className="absolute hidden md:block top-1/2 left-[15%] opacity-20 text-purple-400 transform rotate-20">
        <BatIcon className="w-10 h-10" />
      </div>
    </>
  );

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-200 via-pink-200 to-purple-300 text-gray-800 flex items-center justify-center p-4 overflow-hidden">
      <BatDecorations />
      <div className="z-10 w-full max-w-2xl mx-auto">
        {!quizStarted ? (
          <div className="text-center bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-purple-700">Quiz: 3 Meses de Nós ❤️</h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600">Será que você sabe tudo sobre o seu namoradinho?</p>
            <button
              onClick={startQuiz}
              className="mt-8 px-8 py-4 bg-pink-500 text-white font-bold rounded-full shadow-lg hover:bg-pink-600 transform hover:scale-105 transition-all duration-300"
            >
              Começar!
            </button>
          </div>
        ) : quizFinished ? (
          <Conclusion />
        ) : (
          <QuizCard
            key={currentQuestionIndex}
            questionData={QUIZ_DATA[currentQuestionIndex]}
            onNext={handleNextQuestion}
          />
        )}
      </div>
    </div>
  );
};

export default App;
