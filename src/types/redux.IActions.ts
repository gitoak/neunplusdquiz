export const ADD_SCORE = 'ADD_SCORE'
export const REMOVE_SCORE = 'REMOVE_SCORE'

export interface AddScore {
    type: typeof ADD_SCORE
    amount: number
}

export interface RemoveScore {
    type: typeof REMOVE_SCORE
    amount: number
}

export type QuizActionTypes = AddScore | RemoveScore

export type AppActionTypes = QuizActionTypes