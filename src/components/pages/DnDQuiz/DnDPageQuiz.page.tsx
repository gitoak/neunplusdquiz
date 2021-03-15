import React from 'react'
import { isMobile } from 'react-device-detect'
import '../../../styles/DnDPageQuiz.page.scss'
import { Container, Typographie } from '../../reuseabels'
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
    }

    return (
        <Container type='styled' className='quiz-container'>
            <Typographie type='m' className='quiz-text'>
                Ungesunde Ernährung schadet nicht nur den
                <Space id='space-1' className='quiz-gap' onDrop={(e: any) => handleDrop(e)} />
                sondern vor allem unserem
                <Space id='space-2' className='quiz-gap' onDrop={(e: any) => handleDrop(e)} />
                Eine 4-Köpfige Familie könnte, wenn sie einmal in der Woche auf
                <Space id='space-3' className='quiz-gap' onDrop={(e: any) => handleDrop(e)} />
                Kilogramm Fleisch verzichtet, ganze
                <Space id='space-4' className='quiz-gap' onDrop={(e: any) => handleDrop(e)} />
                Kohlenstoffdioxid im Jahr sparen. Jedoch sollte man auch darauf achten,
                hauptsächlich
                <Space id='space-5' className='quiz-gap' onDrop={(e: any) => handleDrop(e)} />
                Gemüse und Obstsorten zu kaufen und diese nicht von anderen
                <Space id='space-6' className='quiz-gap' onDrop={(e: any) => handleDrop(e)} />
                einfliegen lassen. Aber auch ohne der Beachtung der Herkunft der
                <Space id='space-7' className='quiz-gap' onDrop={(e: any) => handleDrop(e)} />
                fällt ein deutlicher Unterschied der Emissionen zwischen Vegetariern und
                Fleischessern auf. Während Vegetarier
                <Space id='space-8' className='quiz-gap' onDrop={(e: any) => handleDrop(e)} />
                Kohlenstoffdioxid benötigen, erzeugen Fleischesser ganze
                <Space id='space-9' className='quiz-gap' onDrop={(e: any) => handleDrop(e)} />.
            </Typographie>
            <Space
                id='default-space'
                className='quiz-options default-space'
                onDrop={(e: any) => handleDrop(e)}
            >
                <Option id='option-6' className='quiz-option' draggable='true'>
                    Ländern oder Kontinenten
                </Option>
                <Option id='option-2' className='quiz-option' draggable='true'>
                    blauen Planeten
                </Option>
                <Option id='option-3' className='quiz-option' draggable='true'>
                    ein
                </Option>
                <Option id='option-1' className='quiz-option' draggable='true'>
                    kleiner
                </Option>
                <Option id='option-4' className='quiz-option' draggable='true'>
                    700 kg
                </Option>
                <Option id='option-9' className='quiz-option' draggable='true'>
                    1760 kg
                </Option>
                <Option id='option-5' className='quiz-option' draggable='true'>
                    lokale
                </Option>
                <Option id='option-8' className='quiz-option' draggable='true'>
                    1160 kg
                </Option>
                <Option id='option-7' className='quiz-option' draggable='true'>
                    Lebensmittel
                </Option>
            </Space>
            <button onClick={() => alert(completed)}>Menschen</button>
        </Container>
    )
}

export default DnDQuizPage
