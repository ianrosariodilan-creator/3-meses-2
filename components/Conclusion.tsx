
import React from 'react';
import { HAPPINESS_LEVEL_DATA, LOVE_STATS_DATA } from '../constants';
import LoveChart from './LoveChart';

const Conclusion: React.FC = () => {
  return (
    <div className="bg-white/80 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-2xl w-full max-w-3xl mx-auto text-center animate-fade-in space-y-8">
      <h1 className="text-3xl md:text-4xl font-bold text-purple-700">Feliz 3 Meses, Meu Amor!</h1>
      <p className="text-2xl md:text-3xl font-bold text-pink-500">Te amo. ❤️</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
        <div className="bg-purple-50/50 p-4 rounded-xl shadow-inner">
          <h3 className="font-bold text-purple-800 text-lg mb-2">Nível de Felicidade (2025)</h3>
          <LoveChart type="line" data={HAPPINESS_LEVEL_DATA} />
        </div>
        <div className="bg-pink-50/50 p-4 rounded-xl shadow-inner">
          <h3 className="font-bold text-pink-800 text-lg mb-2">Estatísticas de Amor</h3>
          <LoveChart type="pie" data={LOVE_STATS_DATA} />
        </div>
      </div>

      <div className="pt-6">
        <video 
            className="w-full max-w-md mx-auto rounded-lg shadow-xl"
            src="images 3/WhatsApp Video 2026-01-02 at 21.29.47.mp4" 
            controls 
            autoPlay
            loop
            muted
        />
        <p className="mt-4 text-md md:text-lg italic text-gray-700">
          "Vou estar sempre com você nos piores e melhores momentos."
        </p>
      </div>
    </div>
  );
};

export default Conclusion;
