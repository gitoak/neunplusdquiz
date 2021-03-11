import React, { useEffect, useState } from 'react'
import { resume } from '../../../redux/actions/redux.actions.Quiz'
import store from '../../../redux/store/redux.store.configureStore'
import IPage from '../../../types/pages.IPage'
import IDQuiz from '../../../types/quizes.IDQuiz'
import IMQuiz from '../../../types/quizes.IMQuiz'
import IState from '../../../types/redux.IState'
import dquizes from '../../molecules/dquizes/quizes'
import mquizes from '../../molecules/mquizes/quizes'
import PopupQuiz from '../../molecules/PopUpQuiz/main.PopupQuiz'
import { Container } from '../../reuseabels'

const Viewer: React.FC<IPage> = () => {
    const [mquiz, setMQuiz] = useState<IMQuiz>()
    const [dquiz, setDQuiz] = useState<IDQuiz>()
    const [quizType, setQuizType] = useState<'m' | 'd'>()
    const [state, setState] = useState<IState>()
    const [current, setCurrent] = useState<number>()
    const [corecctly, setCorecctly] = useState<boolean>()

    store.subscribe(() => setState(store.getState()))

    useEffect(() => {
        if (state?.current) {
            setCurrent(state.current.id)
            switch (state.current.type) {
                case 'm':
                    setMQuiz(mquizes[state.current.id])
                    setQuizType('m')
                    break
                case 'd':
                    setDQuiz(dquizes[state.current.id])
                    setQuizType('d')
                    break
                default:
                    break
            }
        }
    }, [state])

    if (quizType === 'm' && mquiz !== undefined && current !== undefined) {
        return (
            <Container type='styled'>
                <PopupQuiz
                    question={mquiz.question}
                    a={mquiz.a}
                    b={mquiz.b}
                    c={mquiz.c}
                    d={mquiz.d}
                    answer={mquiz.answer}
                    solution={mquiz.solution}
                    isCorrectly={(correctly: boolean) => setCorecctly(corecctly)}
                ></PopupQuiz>
                {corecctly !== undefined ? (
                    <button onClick={() => store.dispatch(resume('m', current, corecctly))}>
                        Weiter
                    </button>
                ) : (
                    ''
                )}
            </Container>
        )
    } else {
        return <h1>hallo</h1>
    }
}

export default Viewer
