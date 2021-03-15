import IPage from '../../../types/pages.IPage'
import useScore from '../../hooks/useScore'
import { Container, Devider, Link, Typographie } from '../../reuseabels'

const HomePage: React.FC<IPage> = () => {
    const [score, increaseScore, decreaseScore] = useScore()
    return (
        <Container type='styled'>
            <Typographie type='xxxl'>HomePage</Typographie>
            <Typographie type='m'>{score}</Typographie>
            <button onClick={() => increaseScore(1)}>Increase Score</button>
            <button onClick={() => decreaseScore(1)}>Decrease Score</button>
            <Devider type='no-style' />
            <Link type='link' to='/old/quiz1'>
                quiz 1
            </Link>
            <Devider type='no-style' />
            <Link type='link' to='/old/quiz2'>
                quiz 2
            </Link>
        </Container>
    )
}

export default HomePage
