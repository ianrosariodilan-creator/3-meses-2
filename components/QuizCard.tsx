
import React, { useState } from 'react';
import type { QuizQuestion } from '../types';
import BatIcon from './BatIcon';

interface QuizCardProps {
  questionData: QuizQuestion;
  onNext: () => void;
}

const QuizCard: React.FC<QuizCardProps> = ({ questionData, onNext }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  return (
    <div className="bg-white/80 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-2xl w-full max-w-2xl mx-auto animate-fade-in">
      <div className="relative w-full h-56 md:h-72 mb-6 rounded-lg overflow-hidden shadow-lg">
        <img
          src={questionData.image}
          alt="Momento Especial"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 text-pink-400 opacity-80">
          <BatIcon className="w-8 h-8"/>
        </div>
      </div>
      
      <h2 className="text-xl md:text-2xl font-bold text-center text-purple-800 mb-6">
        {questionData.question}
      </h2>

      <div className="text-center transition-all duration-500" style={{ minHeight: '100px' }}>
        {showAnswer ? (
          <div className="animate-fade-in">
            <p className="text-lg md:text-xl p-4 bg-purple-100 text-purple-900 rounded-lg">
              {questionData.answer}
            </p>
            <button
              onClick={onNext}
              className="mt-6 px-8 py-3 bg-purple-600 text-white font-bold rounded-full shadow-lg hover:bg-purple-700 transform hover:scale-105 transition-all duration-300"
            >
              Próxima Pergunta &rarr;
            </button>
          </div>
        ) : (
          <button
            onClick={handleShowAnswer}
            className="px-8 py-3 bg-pink-500 text-white font-bold rounded-full shadow-lg hover:bg-pink-600 transform hover:scale-105 transition-all duration-300"
          >
            Ver Resposta
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizCard;
