import mquizes from '../../components/molecules/mquizes/quizes'
import { QuizActionTypes } from '../../types/redux.IActions'
import IState from '../../types/redux.IState'

const quizReducerDefaultState: IState = {
    score: 0,
    played: [],
    round: 0
}

const QuizReducer = (state = quizReducerDefaultState, action: QuizActionTypes): IState => {
    switch (action.type) {
        case 'ADD_SCORE':
            return Object.assign({}, state, {
                score: state.score + action.amount,
            })
        case "REMOVE_SCORE":
            if (state.score - action.amount >= 0) {
                return Object.assign({}, state, {
                    score: state.score - action.amount,
                })
            } else {
                return state
            }
        case "START_GAME":
            return Object.assign({}, quizReducerDefaultState, {
                round: 1
            })
        case "RESUME":
            if (action.isCorrectly === true) {
                return Object.assign({}, state, {
                    played: [...state.played, { variant: action.variant, id: action.id, correctly: action.isCorrectly }],
                    round: state.round++
                })
            } else {
                return Object.assign({}, state, {
                    played: [...state.played, { variant: action.variant, id: action.id, correctly: action.isCorrectly }],
                    round: state.round--
                })
            }
        case "GET_QUIZ":
            let idlist: any[] = [];
            for (let i = 0; i < state.played.length; i++) {
                idlist[i] = state.played[i].id;
            }

            let choice = Math.floor(Math.random() * mquizes.length);
            while (idlist.includes(choice)) {
                let choice = Math.floor(Math.random() * mquizes.length);
            }

            if (action.variant === "m") {
                return {...state, current: {type: action.variant, id: choice}}
            } else {
                return {...state, current: {type: action.variant, id: choice}} // Dummy Condition
            }
        default:
            return state
    }
}

export default QuizReducer