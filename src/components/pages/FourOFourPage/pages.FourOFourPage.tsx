import IPage from '../../../types/pages.IPage'
import { Container, Typographie } from '../../reuseabels'

const FourOFourpage: React.FC<IPage> = (props) => {
    return (
        <Container type='styled'>
            <Typographie type='xxxl'>404</Typographie>
            <Typographie type='m'>Diese Seite gibt es leider noch nicht</Typographie>
        </Container>
    )
}

export default FourOFourpage
