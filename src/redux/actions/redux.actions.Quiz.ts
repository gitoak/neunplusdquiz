import { ADD_SCORE, AppActionTypes, REMOVE_SCORE } from '../../types/redux.IActions'

export const addScore = (amount: number): AppActionTypes => ({
    type: ADD_SCORE,
    amount
})

export const removeScore = (amount: number): AppActionTypes => ({
    type: REMOVE_SCORE,
    amount
})
