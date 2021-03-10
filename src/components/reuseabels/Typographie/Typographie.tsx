import ITypographie from './ITypographie'
import './Typographie.scss'

export default function Typographie(props: ITypographie): JSX.Element {
    const ClassName = (): string => {
        return props.type.concat(
            props.italic ? ' italic' : '',
            props.className ? ' ' + props.className : ''
        )
    }
    switch (props.type) {
        case 's':
        case 'xs':
            return <small className={ClassName()}>{props.children}</small>
        case 'm':
            return <p className={ClassName()}>{props.children}</p>
        case 'l':
            return <h4 className={ClassName()}>{props.children}</h4>
        case 'xl':
            return <h3 className={ClassName()}>{props.children}</h3>
        case 'xxl':
            return <h2 className={ClassName()}>{props.children}</h2>
        case 'xxxl':
            return <h1 className={ClassName()}>{props.children}</h1>
    }
}
