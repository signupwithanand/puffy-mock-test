export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: number;
  section: string;
  title: string;
  scenario: string;
  options: Option[];
  correctOptionId: string;
  explanation: string;
}

export interface QuizState {
  answers: Record<number, string>;
  isSubmitted: boolean;
  score: number;
  timeRemaining: number; // in seconds
}