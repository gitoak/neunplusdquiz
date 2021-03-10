import React from 'react'
import IButton from './IQuizButton'
import './QuizButton.scss'

const Button: React.FC<IButton> = (props) => {
    const ClassName = (): string => {
        return props.color.concat(
            props.deactivated ? ' deactivated' : '',
            props.className ? ' ' + props.className : ''
        )
    }

    switch (props.deactivated) {
        case true:
            return (
                <button className={ClassName()} disabled={true} onClick={props.onClick}>
                    {props.children}
                </button>
            )
        default:
            return (
                <button className={ClassName()} disabled={false} onClick={props.onClick}>
                    {props.children}
                </button>
            )
    }
}

export default Button
