import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import IState from '../../types/redux.IState'
import rootReducer from '../reducers/redux.reducer.Quiz'

function saveToLocalStorage(state: IState) {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch (e) {
        console.log(e)
    }
}

function loadFromLocalStorage() {
    try {
        const serializedState = localStorage.getItem('state')
        if (serializedState === null) return undefined
        return JSON.parse(serializedState)
    } catch (e) {
        console.log(e)
        return undefined
    }
}

const persistedState = loadFromLocalStorage()

const store = createStore(rootReducer, persistedState, composeWithDevTools())

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store