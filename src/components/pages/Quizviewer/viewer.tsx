import React, { useEffect, useState, useCallback } from 'react'
import { Redirect } from 'react-router'
import { getQuiz, resume, endGame } from '../../../redux/actions/redux.actions.Quiz'
import store from '../../../redux/store/redux.store.configureStore'
import IPage from '../../../types/pages.IPage'
import IDQuiz from '../../../types/quizes.IDQuiz'
import IMQuiz from '../../../types/quizes.IMQuiz'
import IState from '../../../types/redux.IState'
import dquizes from '../../molecules/dquizes/quizes'
import mquizes from '../../molecules/mquizes/quizes'
import PopupQuiz from '../../molecules/PopUpQuiz/main.PopupQuiz'
import { Container, Typographie } from '../../reuseabels'
import { Line } from 'react-chartjs-2';

const Viewer: React.FC<IPage> = () => {
    const [mquiz, setMQuiz] = useState<IMQuiz>()
    const [dquiz, setDQuiz] = useState<IDQuiz>()
    const [quizType, setQuizType] = useState<'m' | 'd'>()
    const [state, setState] = useState<IState>()
    const [current, setCurrent] = useState<number>()
    const [corecctly, setCorecctly] = useState<any>()
    const [reset, setReset] = useState<boolean>()
    var maxrounds = 10


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
        if (rounds !== undefined && rounds > maxrounds-1) {
            store.dispatch(endGame())
            let lstate = localStorage.getItem("state")
            if (lstate) {var score = parseInt(JSON.parse(lstate).score)} else {var score = 0}
            localStorage.removeItem("state")
            let lstat = localStorage.getItem("stat")
            if (lstat !== undefined && lstat !== null) {var stat:Array<number> = JSON.parse(lstat)} else {var stat:Array<number> = [0]}
            localStorage.setItem("stat", JSON.stringify(stat.concat([score])))
            //window.location.reload()
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

    if (!localStorage.getItem("state") && localStorage.getItem("stat")) {
        let lstat = localStorage.getItem("stat")
        if (lstat !== undefined && lstat !== null) { var stat:Array<number> = JSON.parse(lstat) } else {var stat:Array<number> = [0]}
        let score = stat[stat.length-1]
        let vals = stat.slice(Math.max(stat.length - 10, 0))
        let options = {elements:{line:{tension:0}},scales:{yAxes:[{ticks:{suggestedMax:maxrounds}}]}}
        let data = {
            labels: Array.from(Array(10).keys()),
            datasets: [{
                            label: "Punkte der Letzten 10 Durchläufe",
                            data: vals,
                            fill: false,
                            borderColor: "#00BFFF"
                        }]};
        return (
            <Container type="styled">
                    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <Typographie type="l">Gut gemacht! </Typographie>
                    </div>
                    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <Typographie type="m">
                        Du hast {score} von {maxrounds} Fragen Richtig beantwortet
                    </Typographie>
                    </div>
                    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop: 50}}>
                        <button onClick={() => {store.dispatch(getQuiz('m'));localStorage.removeItem("fin")}} color="basic" className="quiz-button">
                            <Typographie type='xs'>Neues Quiz</Typographie>
                        </button>
                    </div>
                    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop: 50}}>
                    <Line data={data} options={options}></Line>
                    </div>
            </Container>
        )
    } else if (quizType === 'm' && mquiz !== undefined && current !== undefined && state?.round !== undefined) {
        return (
            <div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop: 50}}>
            <Typographie type="l">Frage {state?.round + 1} von {maxrounds}</Typographie>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop: 50}}>
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
                        <Typographie type='xs'>{state?.round+1 === maxrounds ? ('Quiz beenden'):('Nächste Frage')}</Typographie>
                    </button>
                ) : (
                    ''
                )}
            </Container>
            </div>
            </div>
        )
    } else if (quizType === 'd') {
        return <h1></h1>
    } else {
        return (
            <Container type='styled'>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', background:"white"}}>
                    <button onClick={() => store.dispatch(getQuiz('m'))} color="basic" className="quiz-button" type="button">
                        <Typographie type='m'>Quiz Starten</Typographie>
                    </button>
                </div>
            </Container>
        )
    }
}

export default Viewer
