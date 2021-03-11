import { ADD_SCORE, AppActionTypes, GET_QUIZ, REMOVE_SCORE, RESUME, START_GAME } from '../../types/redux.IActions'

export const addScore = (amount: number): AppActionTypes => ({
    type: ADD_SCORE,
    amount
})

export const removeScore = (amount: number): AppActionTypes => ({
    type: REMOVE_SCORE,
    amount
})

export const startGame = (): AppActionTypes => ({
    type: START_GAME
})

export const resume = (variant: "m" | "d", id: number, isCorrectly: boolean): AppActionTypes => ({
    type: RESUME,
    variant,
    id,
    isCorrectly
})

export const getQuiz = (variant: "m" | "d"): AppActionTypes => ({
    type: GET_QUIZ,
    variant
})
