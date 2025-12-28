
import React, { useState, useEffect } from 'react';
import { AppStep, AppState } from './types';
import UsernameStep from './components/Steps/UsernameStep';
import SelectionStep from './components/Steps/SelectionStep';
import GeneratingStep from './components/Steps/GeneratingStep';
import SuccessStep from './components/Steps/SuccessStep';
import LoadingSpinner from './components/LoadingSpinner';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({
    step: AppStep.USERNAME,
    username: '',
    selectedAmount: null,
    progress: 0,
  });

  // Handle transitions
  useEffect(() => {
    if (state.step === AppStep.CONNECTING) {
      const timer = setTimeout(() => {
        setState(prev => ({ ...prev, step: AppStep.SELECTION }));
      }, 1000);
      return () => clearTimeout(timer);
    }

    if (state.step === AppStep.GENERATING) {
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += 2;
        setState(prev => ({ ...prev, progress: currentProgress }));
        
        if (currentProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setState(prev => ({ ...prev, step: AppStep.SUCCESS }));
          }, 500);
        }
      }, 100); // 100ms * 50 = 5000ms (5 seconds)
      return () => clearInterval(interval);
    }
  }, [state.step]);

  const handleUsernameSubmit = (username: string) => {
    setState(prev => ({ ...prev, username, step: AppStep.CONNECTING }));
  };

  const handleAmountSelect = (amount: number) => {
    setState(prev => ({ ...prev, selectedAmount: amount, step: AppStep.GENERATING }));
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Orbs for Aesthetic */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

      <main className="w-full max-w-lg transition-all duration-500 transform">
        {state.step === AppStep.USERNAME && (
          <UsernameStep onSubmit={handleUsernameSubmit} />
        )}

        {state.step === AppStep.CONNECTING && (
          <div className="glass rounded-3xl p-12 flex flex-col items-center gap-6 shadow-2xl">
            <LoadingSpinner size="lg" />
          </div>
        )}

        {state.step === AppStep.SELECTION && (
          <SelectionStep 
            username={state.username} 
            onSelect={handleAmountSelect} 
          />
        )}

        {state.step === AppStep.GENERATING && (
          <GeneratingStep 
            progress={state.progress} 
          />
        )}

        {state.step === AppStep.SUCCESS && (
          <SuccessStep 
            username={state.username} 
            amount={state.selectedAmount || 0} 
          />
        )}
      </main>
    </div>
  );
};

export default App;
