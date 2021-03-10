import './Devider.scss'
import IDevider from './IDevider'

const Devider = (props: IDevider): JSX.Element => {
	switch (props.type) {
		case 'styled':
			return <hr className="devider-styled" />
		case 'no-style':
			return <br className="devider" />
	}
}

export default Devider
