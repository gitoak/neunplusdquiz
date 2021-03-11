import React, { useEffect, useState } from 'react'
import store from '../../../redux/store/redux.store.configureStore'
import IPage from '../../../types/pages.IPage'
import IDQuiz from '../../../types/quizes.IDQuiz'
import IMQuiz from '../../../types/quizes.IMQuiz'
import IState from '../../../types/redux.IState'
import dquizes from '../../molecules/dquizes/quizes'
import mquizes from '../../molecules/mquizes/quizes'

const Viewer = (): React.FC<IPage> => {
    const [quiz, setQuiz] = useState<IDQuiz | IMQuiz>()
    const [state, setState] = useState<IState>()

    store.subscribe(() => setState(store.getState()))

    useEffect(() => {
        if (state?.current) {
            switch (state.current.type) {
                case "m":
                    setQuiz(mquizes[state.current.id])
                    break
                case "d":
                    setQuiz(dquizes[state.current.id])
                    break
                default:
                    break
        } else {
            setQuiz(undefined)
        }
    }, [state])
}
