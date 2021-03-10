import { useCallback, useEffect, useState } from 'react'
import { addScore, removeScore } from '../../redux/actions/redux.actions.Quiz'
import store from '../../redux/store/redux.store.configureStore'

const useScore = () => {
    const [score, setScore] = useState<number>()

    const update = useCallback(() => {
        setScore(store.getState().score)
    }, [])

    useEffect(() => {
        update()
    }, [update])

    store.subscribe(() => update())

    const increaseScore = (amount: number) => {
        store.dispatch(addScore(amount))
    }

    const decreaseScore = (amount: number) => {
        store.dispatch(removeScore(amount))
    }

    return [score, increaseScore, decreaseScore] as const
}

export default useScore
