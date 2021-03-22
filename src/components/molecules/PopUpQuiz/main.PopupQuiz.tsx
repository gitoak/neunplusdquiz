import { stat } from 'node:fs'
import React, { useEffect } from 'react'
import useQuiz from '../../hooks/useMQuiz'
import { Container, List, QuizButton as Button, Typographie } from '../../reuseabels'
import IPopupQuiz from './IPopupQuiz'
import './main.PopupQuiz.scss'

const PopupQuiz = (props: IPopupQuiz): JSX.Element => {
    const { aColor, bColor, cColor, dColor, giveAwnser, setAwnser, status, setStatus, correctly, setCorrectly } = useQuiz(
        props.solution
    )

    useEffect(() => {
        if (correctly !== undefined) {
            props.isCorrectly(correctly)
        }
        if (status === "ready" && props.doReset()) {
            setAwnser("")
            setStatus("waiting")
            props.isCorrectly(null)
            setCorrectly(null)
        }
    })

    if (status === 'ready') {
        return (
            <Container type='no-style' className='quiz-card'>
                <List type='none'>
                    <Button color={aColor.color} className='quiz-button' deactivated={true}>
                        <Typographie type='xs'>{props.a}</Typographie>
                    </Button>
                    <Button color={bColor.color} className='quiz-button' deactivated={true}>
                        <Typographie type='xs'>{props.b}</Typographie>
                    </Button>
                    <Button color={cColor.color} className='quiz-button' deactivated={true}>
                        <Typographie type='xs'>{props.c}</Typographie>
                    </Button>
                    <Button color={dColor.color} className='quiz-button' deactivated={true}>
                        <Typographie type='xs'>{props.d}</Typographie>
                    </Button>
                </List>
                <Container type='no-style' className='quiz-text'>
                    <Typographie type='l' className='quiz-question'>
                        {props.question}
                    </Typographie>
                    <Typographie type='xs' className='quiz-awnser'>
                        {props.answer}
                    </Typographie>
                </Container>
            </Container>
        )
    } else {
        return (
            <Container type='no-style' className='quiz-card'>
                <List type='none'>
                    <Button color='basic' className='quiz-button' onClick={() => giveAwnser('a')}>
                        <Typographie type='xs'>{props.a}</Typographie>
                    </Button>
                    <Button color='basic' className='quiz-button' onClick={() => giveAwnser('b')}>
                        <Typographie type='xs'>{props.b}</Typographie>
                    </Button>
                    <Button color='basic' className='quiz-button' onClick={() => giveAwnser('c')}>
                        <Typographie type='xs'>{props.c}</Typographie>
                    </Button>
                    <Button color='basic' className='quiz-button' onClick={() => giveAwnser('d')}>
                        <Typographie type='xs'>{props.d}</Typographie>
                    </Button>
                </List>
                <Container type='no-style' className='quiz-text'>
                    <Typographie type='l' className='quiz-question'>
                        {props.question}
                    </Typographie>
                </Container>
            </Container>
        )
    }
}

export default PopupQuiz
