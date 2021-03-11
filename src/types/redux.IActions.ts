export const ADD_SCORE = 'ADD_SCORE'
export const REMOVE_SCORE = 'REMOVE_SCORE'

export const START_GAME = 'START_GAME'
export const RESUME = 'RESUME'
export const GET_QUIZ = 'GET_QUIZ'

export interface AddScore {
    type: typeof ADD_SCORE
    amount: number
}

export interface RemoveScore {
    type: typeof REMOVE_SCORE
    amount: number
}

export interface StartGame {
    type: typeof START_GAME
}

export interface Resume {
    type: typeof RESUME
    variant: "m" | "d"
    id: number
    isCorrectly: boolean
}

export interface GetQuiz {
    type: typeof GET_QUIZ
    variant: "m" | "d"
}

export type QuizActionTypes = AddScore | RemoveScore | StartGame | Resume | GetQuiz

export type AppActionTypes = QuizActionTypes