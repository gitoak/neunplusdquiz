import React, { useEffect, useState, useCallback } from 'react'
import { Redirect } from 'react-router'
import { getQuiz, resume, endGame } from '../../../redux/actions/redux.actions.Quiz'
import store from '../../../redux/store/redux.store.configureStore'
import IPage from '../../../types/pages.IPage'
import IDQuiz from '../../../types/quizes.IDQuiz'
import IMQuiz from '../../../types/quizes.IMQuiz'
import { END_GAME } from '../../../types/redux.IActions'
import IState from '../../../types/redux.IState'
import dquizes from '../../molecules/dquizes/quizes'
import mquizes from '../../molecules/mquizes/quizes'
import PopupQuiz from '../../molecules/PopUpQuiz/main.PopupQuiz'
import { Container, Typographie } from '../../reuseabels'

const Viewer: React.FC<IPage> = () => {
    const [mquiz, setMQuiz] = useState<IMQuiz>()
    const [dquiz, setDQuiz] = useState<IDQuiz>()
    const [quizType, setQuizType] = useState<'m' | 'd'>()
    const [state, setState] = useState<IState>()
    const [current, setCurrent] = useState<number>()
    const [corecctly, setCorecctly] = useState<any>()
    const [reset, setReset] = useState<boolean>()

    const update = useCallback(() => {
        setState(store.getState())
    }, [])

    store.subscribe(() => update())

    const nextQuiz = () => {
        if (current !== undefined) {
            if (corecctly !== undefined) {
                store.dispatch(resume('m', current, corecctly))
            } else {
                store.dispatch(resume('m', current, false))
            }
        }
        setReset(true)
        store.dispatch(getQuiz('m'))
        window.location.reload()
    }


    useEffect(() => {
        update();
        // Bessere Anzeige dringend nötig
        let rounds = state?.round
        if (rounds !== undefined && rounds > 9) {
            store.dispatch(endGame())
            let lstate = localStorage.getItem("state")
            if (lstate) {var score = parseInt(JSON.parse(lstate).score)} else {var score = 0}
            alert("Runde: " + rounds + " Punkte: " + score + " | Unvollständig")
            localStorage.removeItem("state")
            window.location.reload()
        }
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
                    isCorrectly={(correctly: boolean) => setCorecctly(correctly)}
                    doReset={() => (reset)}
                ></PopupQuiz>
                {corecctly !== undefined && corecctly !== null ? (
                    <button onClick={() => nextQuiz()} color="basic" className="quiz-button">
                        <Typographie type='xs'>Nächste Frage</Typographie>
                    </button>
                ) : (
                    ''
                )}
            </Container>
        )
    } else if (quizType === 'd') {
        return <h1>hallo</h1>
    } else {
        return (
            <div>
                <Container type='styled'>
                <button onClick={() => store.dispatch(getQuiz('m'))} color="basic" className="quiz-button">
                    <Typographie type='m'>Quiz Starten</Typographie>
                </button>
                </Container>
            </div>
        )
    }
}

export default Viewer
