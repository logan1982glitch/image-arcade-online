
import { create } from 'zustand';
import { GameState } from '../types/game';
import { questions } from '../data/questions';
import { toast } from '@/hooks/use-toast';

export const useGameStore = create<GameState & {
  startGame: () => void;
  answerQuestion: (questionId: number, answerId: string) => void;
  nextQuestion: () => void;
  resetGame: () => void;
}>((set, get) => ({
  currentQuestion: 0,
  score: 0,
  questions,
  answers: [],
  gameStarted: false,
  gameFinished: false,

  startGame: () => set({ 
    gameStarted: true, 
    gameFinished: false, 
    currentQuestion: 0,
    score: 0,
    answers: []
  }),

  answerQuestion: (questionId, answerId) => {
    const { questions } = get();
    const question = questions.find(q => q.id === questionId);
    
    if (question) {
      const isCorrect = question.correctAnswer === answerId;
      
      set(state => ({
        answers: [...state.answers, { questionId, answerId }],
        score: isCorrect ? state.score + 1 : state.score,
      }));

      if (isCorrect) {
        toast({
          title: "Correct!",
          description: "You got it right!",
          variant: "default",
        });
      } else {
        toast({
          title: "Incorrect",
          description: `The correct answer was ${question.correctAnswer}`,
          variant: "destructive",
        });
      }
    }
  },

  nextQuestion: () => {
    const { currentQuestion, questions } = get();
    
    if (currentQuestion < questions.length - 1) {
      set({ currentQuestion: currentQuestion + 1 });
    } else {
      set({ gameFinished: true });
    }
  },

  resetGame: () => set({ 
    gameStarted: false, 
    gameFinished: false,
    currentQuestion: 0,
    score: 0,
    answers: []
  }),
}));
