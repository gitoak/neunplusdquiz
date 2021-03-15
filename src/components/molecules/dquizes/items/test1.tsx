import React from 'react'
import { isMobile } from 'react-device-detect'
import '../../../../styles/DnDPageQuiz.page.scss'
import { Container, Typographie } from '../../../reuseabels'
import Option from './Space/option'
import Space from './Space/space'

var tempstate: any[] = []
var completed: boolean = false

const DnDQuizPage = () => {
    if (isMobile) {
        return <Typographie type='xl'>Dieses Feture Funktioniert nur am PC</Typographie>
    }

    const handleDrop = (e: any) => {
        if (tempstate.length === 0) {
            tempstate = new Array(2).fill(false)
        }
        var id = e.solution.replace(/\D/g, '')
        if (e.space.replace(/\D/g, '') === id) {
            tempstate[parseInt(id) - 1] = true
        } else {
            tempstate[parseInt(id) - 1] = false
        }
        completed = tempstate.every((x) => x)
        if (completed) {
            alert('Alle Richtig!')
        }
    }

    return (
        <Container type='styled' className='quiz-container'>
            <Typographie type='m' className='quiz-text'>
                Ein
                <Space id='space-1' className='quiz-gap' onDrop={(e: any) => handleDrop(e)} />
                Text mit einer
                <Space id='space-2' className='quiz-gap' onDrop={(e: any) => handleDrop(e)} />
                Lücke
            </Typographie>
            <Space
                id='default-space'
                className='quiz-options default-space'
                onDrop={(e: any) => handleDrop(e)}
            >
                <Option id='option-1' className='quiz-option' draggable='true'>
                    kleiner
                </Option>
                <Option id='option-2' className='quiz-option' draggable='true'>
                    großen
                </Option>
            </Space>
        </Container>
    )
}

///<Option id='option-3' className='quiz-option' draggable='true'>
///    hallo
///</Option>

export default DnDQuizPage
