
import React from 'react';

interface SuccessStepProps {
  username: string;
  amount: number;
}

const SuccessStep: React.FC<SuccessStepProps> = ({ username, amount }) => {
  return (
    <div className="glass rounded-3xl p-8 md:p-12 shadow-2xl text-center animate-in zoom-in duration-500">
      <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
        <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h2 className="text-3xl font-black text-white mb-8">Transfer Complete!</h2>
      
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <div className="text-amber-400 text-5xl font-black mb-4 flex items-center justify-center gap-3">
          <img 
            src="https://i.imgur.com/mgLSBSR.png" 
            alt="Robux" 
            className="w-14 h-14 object-contain"
          />
          {amount.toLocaleString()}
        </div>
        <p className="text-slate-400 font-medium">
          Successfully transferred to:
        </p>
        <p className="text-xl font-bold text-white mt-1">{username}</p>
      </div>
    </div>
  );
};

export default SuccessStep;
