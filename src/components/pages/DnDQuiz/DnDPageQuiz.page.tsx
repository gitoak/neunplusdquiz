import React from 'react'
import { isMobile } from 'react-device-detect'
import '../../../styles/DnDPageQuiz.page.scss'
import { Container, Typographie } from '../../reuseabels'
import Option from './Space/option'
import Space from './Space/space'

const DnDQuizPage = () => {
    if (isMobile) {
        return <Typographie type='xl'>Dieses Feture Funktioniert nur am PC</Typographie>
    }

    const handleDrop = (e: any) => {
        console.log(e)
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
                <Option id='option-3' className='quiz-option' draggable='true'>
                    hallo
                </Option>
            </Space>
        </Container>
    )
}

export default DnDQuizPage
