import React from 'react'
import IPage from '../../../types/pages.IPage'
import { Container, Typographie } from '../../reuseabels'

const AboutPage: React.FC<IPage> = (props) => {
    return (
        <Container type='styled'>
            <Typographie type='xxxl'>About seite</Typographie>
        </Container>
    )
}

export default AboutPage
