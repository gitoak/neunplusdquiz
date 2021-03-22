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
            if (action.isCorrectly) {
                return Object.assign({}, state, {
                    played: [...state.played, { variant: action.variant, id: action.id, correctly: action.isCorrectly }],
                    round: state.round += 1
                })
            } else {
                return Object.assign({}, state, {
                    played: [...state.played, { variant: action.variant, id: action.id, correctly: action.isCorrectly }],
                    round: state.round += 1
                })
            }
        case "END_GAME":
            if (!state) {
                var score = 0
            } else {
                var score = 0
                for (let i = 0;i < state.played.length;i++) {
                    if (state.played[i].correctly) {
                        score += 1
                    }
                }
            }
            return Object.assign({}, state, { score: score, round: 1, played : []})
        case "GET_QUIZ":
            if (!state) {
                return Object.assign({}, state, {
                    current: { type: action.variant, id: Math.floor(Math.random() * mquizes.length) }
                })
            }

            let idlist: any[] = []
            for (let i = 0;i < state.played.length;i++) {
                idlist[i] = state.played[i].id
            }

            if (idlist.length >= mquizes.length) {
                return { ...state, current: { type: action.variant, id: -1 } } // Kritischer Fehler. Verhindert nur eine Endlosschleife.
            }

            let choice = Math.floor(Math.random() * mquizes.length)
            while (idlist.includes(choice)) {
                choice = Math.floor(Math.random() * mquizes.length)
            }

            if (action.variant === "m") {
                return { ...state, current: { type: action.variant, id: choice } }
            } else {
                return { ...state, current: { type: action.variant, id: choice } } // Dummy Condition
            }
        default:
            return state
    }
}

export default QuizReducer