
export interface Question {
  id: number;
  image: string;
  options: Option[];
  correctAnswer: string;
  description: string;
}

export interface Option {
  id: string;
  text: string;
}

export interface GameState {
  currentQuestion: number;
  score: number;
  questions: Question[];
  answers: { questionId: number; answerId: string }[];
  gameStarted: boolean;
  gameFinished: boolean;
}
