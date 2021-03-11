import IPage from '../../../types/pages.IPage'
import PopupQuiz from '../../molecules/PopUpQuiz/main.PopupQuiz'
import { Container } from '../../reuseabels'

const MQuizPage: React.FC<IPage> = () => {
    return (
        <Container type='styled'>
            <PopupQuiz
                question='Was gehört nicht zum Kernobst?'
                a='Hagebutte'
                b='Pflaume'
                c='Apfel'
                d='Birne'
                answer='Kernobst ist ein Sammelbegriff für Früchte aus der Familie der Rosengewächse, die ein Kerngehäuse besitzen. Da eine Pflaume dieses Kerngehäuse nicht hat, ist sie kein Kernobst.                '
                solution='b'
                isCorrectly={false}
            ></PopupQuiz>
            <button onClick={() => window.location.reload(false)}>Try again</button>
        </Container>
    )
}

export default MQuizPage
