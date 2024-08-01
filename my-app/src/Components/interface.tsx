export interface Question {
    type: string;
    difficulty: string;
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
    allAnswers: string[];
    allRightAnswers: string[];
    questions: string[];
    items: Question[];
}

export interface RootState {
    questions: {
      items: Question[];
      status: 'idle' | 'loading' | 'succeeded' | 'failed';
      error: string | null;
    };
    results: {
      current: number;
      easy: number;
      medium: number;
      hard: number;
      rightAnswers: number;
    };
  }