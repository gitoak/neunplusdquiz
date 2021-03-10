import './Container.scss'
import IContainer from './IContainer'

const Container = (props: IContainer): JSX.Element => {
    switch (props.type) {
        case 'styled':
            return (
                <div
                    className={'container'.concat(
                        props.spacing ? ' spacing' : '',
                        props.centered ? ' contain-centered' : '',
                        props.className ? ' ' + props.className : ''
                    )}
                >
                    {props.children}
                </div>
            )
        case 'no-style':
            return (
                <div className={''.concat(props.className ? props.className : '')}>
                    {props.children}
                </div>
            )
    }
}

export default Container
