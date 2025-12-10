import React from 'react';
import { Question } from '../types';
import { CheckCircle, XCircle, HelpCircle } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  selectedOption: string | undefined;
  onSelectOption: (optionId: string) => void;
  isSubmitted: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedOption,
  onSelectOption,
  isSubmitted,
}) => {
  const isCorrect = isSubmitted && selectedOption === question.correctOptionId;
  const isWrong = isSubmitted && selectedOption !== question.correctOptionId && selectedOption !== undefined;
  const isUnanswered = isSubmitted && selectedOption === undefined;

  return (
    <div className={`bg-white rounded-xl shadow-sm border transition-all ${
      isSubmitted 
        ? (isCorrect ? 'border-green-500 ring-1 ring-green-500' : 'border-red-500 ring-1 ring-red-500')
        : 'border-gray-200 shadow-md'
    }`}>
      {/* Question Header */}
      <div className="px-8 py-6 border-b border-gray-100 flex justify-between items-start bg-gray-50/50 rounded-t-xl">
        <div className="w-full">
          <h3 className="text-xl font-bold text-gray-900 leading-tight">{question.title}</h3>
          
          {/* Status Badge (Only shown in review mode) */}
          {isSubmitted && (
            <div className="mt-3 inline-flex">
              {isCorrect && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Correct
                </span>
              )}
              {isWrong && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  <XCircle className="w-3 h-3 mr-1" />
                  Incorrect
                </span>
              )}
              {isUnanswered && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  <HelpCircle className="w-3 h-3 mr-1" />
                  Not Answered
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="p-8">
        {/* Scenario Text */}
        <div className="prose prose-base max-w-none mb-8 text-gray-700 whitespace-pre-wrap font-medium leading-relaxed">
          {question.scenario}
        </div>

        {/* Options */}
        <div className="space-y-3">
          {question.options.map((option) => {
            const isSelected = selectedOption === option.id;
            const isCorrectOption = option.id === question.correctOptionId;
            
            let optionClass = "group flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-200 ";
            
            if (isSubmitted) {
              if (isSelected && isCorrectOption) {
                optionClass += "bg-green-50 border-green-500 text-green-900 shadow-sm";
              } else if (isSelected && !isCorrectOption) {
                optionClass += "bg-red-50 border-red-500 text-red-900 shadow-sm";
              } else if (isCorrectOption) {
                optionClass += "bg-green-50/50 border-green-300 text-green-900 ring-2 ring-green-100 border-dashed";
              } else {
                optionClass += "bg-gray-50 border-gray-100 text-gray-400 opacity-50";
              }
            } else {
              if (isSelected) {
                optionClass += "bg-blue-50 border-blue-600 ring-1 ring-blue-600 text-blue-900 shadow-md transform scale-[1.01]";
              } else {
                optionClass += "bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300 text-gray-700 shadow-sm";
              }
            }

            return (
              <div 
                key={option.id} 
                onClick={() => !isSubmitted && onSelectOption(option.id)}
                className={optionClass}
              >
                <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border mr-4 transition-colors ${
                  isSelected 
                    ? (isSubmitted ? (isCorrectOption ? 'border-green-600 bg-green-600 text-white' : 'border-red-600 bg-red-600 text-white') : 'border-blue-600 bg-blue-600 text-white') 
                    : (isSubmitted && isCorrectOption ? 'border-green-500 bg-green-100 text-green-700' : 'border-gray-300 bg-white text-gray-500 group-hover:border-gray-400')
                }`}>
                  <span className="text-sm font-bold">{option.id}</span>
                </div>
                <span className="text-base font-medium">{option.text}</span>
              </div>
            );
          })}
        </div>

        {/* Explanation Logic (Only show if submitted) */}
        {isSubmitted && (
          <div className="mt-8 p-6 bg-slate-900 rounded-lg text-slate-100 shadow-inner border border-slate-700">
            <h4 className="flex items-center text-xs font-bold uppercase text-slate-400 mb-3 tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></span>
              Explanation & Analysis
            </h4>
            <div className="text-sm leading-7 whitespace-pre-wrap font-mono text-slate-300">
              {question.explanation}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;