import React, { useState, useEffect } from 'react';
import { QUESTIONS, TOTAL_TIME_SECONDS } from './constants';
import QuestionCard from './components/QuestionCard';
import ResultsHeader from './components/ResultsHeader';
import { Timer, Server, ChevronRight, ChevronLeft, LayoutGrid, CheckSquare } from 'lucide-react';

const App: React.FC = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME_SECONDS);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showNavigator, setShowNavigator] = useState(false);

  // Timer logic
  useEffect(() => {
    if (isSubmitted || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleSubmit(true); // Auto submit force
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isSubmitted, timeLeft]);

  const handleSelectOption = (questionId: number, optionId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  const calculateScore = () => {
    let score = 0;
    QUESTIONS.forEach((q) => {
      if (answers[q.id] === q.correctOptionId) {
        score++;
      }
    });
    return score;
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleSubmit = (force = false) => {
    // Immediate submission without blocking confirm dialog
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRestart = () => {
    setAnswers({});
    setIsSubmitted(false);
    setTimeLeft(TOTAL_TIME_SECONDS);
    setCurrentQuestionIndex(0);
    setShowNavigator(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const jumpToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
    setShowNavigator(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const score = calculateScore();
  const currentQuestion = QUESTIONS[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === QUESTIONS.length - 1;

  // Render Result View (Scrollable list of all questions with feedback)
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-100 pb-20 font-sans text-gray-900">
        <header className="bg-white shadow-sm sticky top-0 z-30 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-gray-900 text-white p-1.5 rounded">
                <Server className="w-5 h-5" />
              </div>
              <h1 className="text-lg font-bold tracking-tight">ASSESSMENT RESULTS</h1>
            </div>
            <div className="font-bold text-gray-900">TEST COMPLETE</div>
          </div>
        </header>

        <main className="max-w-3xl mx-auto px-4 pt-8">
          <ResultsHeader score={score} total={QUESTIONS.length} />
          
          <div className="space-y-8">
            {QUESTIONS.map((q, index) => (
              <div key={q.id} className="relative">
                <div className="absolute -left-3 top-6 -translate-x-full hidden md:flex flex-col items-center pr-4">
                  <span className="text-xs font-bold text-gray-400 mb-1">Q{index + 1}</span>
                  {answers[q.id] === q.correctOptionId ? (
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  ) : (
                     <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  )}
                </div>
                <QuestionCard 
                  question={q}
                  selectedOption={answers[q.id]}
                  onSelectOption={() => {}}
                  isSubmitted={true}
                />
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center pb-12">
            <button 
              onClick={handleRestart}
              className="text-gray-500 hover:text-gray-900 font-medium underline"
            >
              Restart Simulation
            </button>
          </div>
        </main>
      </div>
    );
  }

  // Render Test View (Single Question)
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900">
      
      {/* Top Bar */}
      <header className="bg-white shadow-sm sticky top-0 z-30 border-b border-gray-200 h-16">
        <div className="max-w-5xl mx-auto px-4 h-full flex items-center justify-between">
          
          {/* Left: Branding & Section */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gray-900 text-white p-1.5 rounded">
                <Server className="w-5 h-5" />
              </div>
              <span className="font-bold tracking-tight hidden sm:block">PUFFY SIMULATION</span>
            </div>
            <div className="h-6 w-px bg-gray-300 hidden sm:block"></div>
            <div className="text-sm font-medium text-gray-600 truncate max-w-[150px] sm:max-w-xs">
              {currentQuestion.section.split(':')[0]}
            </div>
          </div>

          {/* Right: Timer & Navigator Toggle */}
          <div className="flex items-center space-x-4">
             <div className="flex items-center text-sm font-mono font-medium bg-gray-100 px-3 py-1.5 rounded-md border border-gray-200">
              <Timer className={`w-4 h-4 mr-2 ${timeLeft < 300 ? 'text-red-500 animate-pulse' : 'text-gray-500'}`} />
              <span className={timeLeft < 300 ? 'text-red-600 font-bold' : 'text-gray-700'}>{formatTime(timeLeft)}</span>
            </div>
            
            <button 
              onClick={() => setShowNavigator(!showNavigator)}
              className={`p-2 rounded-md transition-colors ${showNavigator ? 'bg-gray-200 text-gray-900' : 'hover:bg-gray-100 text-gray-600'}`}
              title="Question Navigator"
            >
              <LayoutGrid className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col items-center justify-start pt-8 pb-24 px-4">
        
        {/* Navigator Overlay (Mobile/Desktop Dropdown style) */}
        {showNavigator && (
          <div className="w-full max-w-5xl mb-6 bg-white rounded-lg shadow-lg border border-gray-200 p-4 animate-in slide-in-from-top-2 duration-200">
            <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-2">
              <h3 className="font-bold text-gray-800 text-sm uppercase tracking-wide">Question Navigator</h3>
              <div className="flex space-x-4 text-xs">
                <div className="flex items-center"><span className="w-3 h-3 bg-gray-900 rounded-sm mr-1"></span> Current</div>
                <div className="flex items-center"><span className="w-3 h-3 bg-blue-100 border border-blue-300 rounded-sm mr-1"></span> Answered</div>
                <div className="flex items-center"><span className="w-3 h-3 bg-white border border-gray-300 rounded-sm mr-1"></span> Unanswered</div>
              </div>
            </div>
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
              {QUESTIONS.map((q, idx) => {
                const isAnswered = !!answers[q.id];
                const isCurrent = idx === currentQuestionIndex;
                return (
                  <button
                    key={q.id}
                    onClick={() => jumpToQuestion(idx)}
                    className={`
                      h-10 text-sm font-medium rounded-md border transition-all
                      ${isCurrent 
                        ? 'bg-gray-900 text-white border-gray-900 shadow-md ring-2 ring-offset-1 ring-gray-900' 
                        : isAnswered 
                          ? 'bg-blue-50 text-blue-800 border-blue-200 hover:bg-blue-100' 
                          : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50'
                      }
                    `}
                  >
                    {idx + 1}
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* Question Card */}
        <div className="w-full max-w-3xl">
          <div className="mb-4 flex justify-between items-end">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Question {currentQuestionIndex + 1} of {QUESTIONS.length}
            </span>
            <div className="text-xs text-gray-400">
              {Object.keys(answers).length} answered
            </div>
          </div>
          
          <QuestionCard 
            question={currentQuestion}
            selectedOption={answers[currentQuestion.id]}
            onSelectOption={(optId) => handleSelectOption(currentQuestion.id, optId)}
            isSubmitted={false}
          />
        </div>

      </main>

      {/* Footer Navigation Bar */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 h-20 px-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-40">
        <div className="max-w-5xl mx-auto h-full flex items-center justify-between">
          
          <button
            onClick={prevQuestion}
            disabled={currentQuestionIndex === 0}
            className={`
              flex items-center px-5 py-2.5 rounded-lg font-medium transition-colors
              ${currentQuestionIndex === 0 
                ? 'text-gray-300 cursor-not-allowed' 
                : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }
            `}
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Previous
          </button>

          {/* Progress Dots (Hidden on mobile) */}
          <div className="hidden md:flex space-x-1">
            {QUESTIONS.map((_, idx) => (
              <div 
                key={idx}
                className={`w-1.5 h-1.5 rounded-full ${
                  idx === currentQuestionIndex ? 'bg-gray-800' : 
                  answers[QUESTIONS[idx].id] ? 'bg-blue-400' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>

          {isLastQuestion ? (
            <button
              onClick={() => handleSubmit(false)}
              className="flex items-center px-6 py-2.5 bg-gray-900 hover:bg-black text-white rounded-lg font-bold shadow-md transition-transform active:scale-95"
            >
              Submit Test
              <CheckSquare className="w-4 h-4 ml-2" />
            </button>
          ) : (
            <button
              onClick={nextQuestion}
              className="flex items-center px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold shadow-sm transition-colors"
            >
              Next
              <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          )}
          
        </div>
      </footer>
    </div>
  );
};

export default App;