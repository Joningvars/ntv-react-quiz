export type Answer = {
    answer: string;
    isCorrect: boolean;
}

export type Question = {
    question: string;
    answers: Answer[]
}