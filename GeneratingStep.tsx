
import React from 'react';
import LoadingSpinner from '../LoadingSpinner';

interface GeneratingStepProps {
  progress: number;
}

const GeneratingStep: React.FC<GeneratingStepProps> = ({ progress }) => {
  return (
    <div className="glass rounded-3xl p-12 shadow-2xl flex flex-col items-center text-center">
      <div className="mb-10">
        <LoadingSpinner size="lg" />
      </div>

      <h2 className="text-2xl font-bold text-white mb-12 animate-pulse">
        Generating Robux
      </h2>

      <div className="w-full bg-slate-900 h-4 rounded-full overflow-hidden border border-white/5">
        <div 
          className="h-full robux-gradient transition-all duration-300 ease-out shadow-[0_0_20px_rgba(251,191,36,0.4)]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default GeneratingStep;
