export { type Question } from './data/questions';

export interface ExamAttempt {
  id: string;
  date: string;
  mode: string;
  score: number;
  totalQuestions: number;
  strikes: number;
  status: 'PASSED' | 'FAILED' | 'COMPLETED';
}

export type QuizMode = 'exam' | 'marathon' | 'controls' | 'lanes' | 'laws';
export type AppView = 'home' | 'quiz' | 'stats' | 'disclaimer';
