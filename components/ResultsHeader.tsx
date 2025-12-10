import React from 'react';
import { AlertCircle, CheckCircle, Award } from 'lucide-react';

interface ResultsHeaderProps {
  score: number;
  total: number;
}

const ResultsHeader: React.FC<ResultsHeaderProps> = ({ score, total }) => {
  const percentage = Math.round((score / total) * 100);
  const passed = percentage >= 80;

  return (
    <div className={`mb-8 p-6 rounded-xl shadow-lg text-white ${passed ? 'bg-gradient-to-r from-green-600 to-emerald-700' : 'bg-gradient-to-r from-red-600 to-rose-700'}`}>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="p-3 bg-white/20 rounded-full mr-4">
            {passed ? <Award className="w-8 h-8" /> : <AlertCircle className="w-8 h-8" />}
          </div>
          <div>
            <h2 className="text-2xl font-bold">{passed ? "Hired: Head of Infrastructure" : "Application Rejected"}</h2>
            <p className="text-white/90">
              {passed 
                ? "Excellent work. You demonstrated strong command of both commercial math and systems architecture." 
                : "You failed the Puffy simulation. Review the analysis below to understand the gaps in your knowledge."}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center bg-white/10 rounded-lg p-4 min-w-[120px]">
          <span className="text-xs uppercase tracking-wider font-semibold opacity-80">Final Score</span>
          <span className="text-4xl font-bold">{score}/{total}</span>
          <span className="text-sm font-medium mt-1">{percentage}%</span>
        </div>
      </div>
    </div>
  );
};

export default ResultsHeader;