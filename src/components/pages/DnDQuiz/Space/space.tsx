import React from 'react'
import '../../../../styles/DnDPageQuiz.page.scss'
import IProps from '../../../../types/DnDSpace.IProps'

const Space = (props: IProps) => {
    const drop = (e: any) => {
        e.preventDefault()
        const solution_id = e.dataTransfer.getData('solution_id')

        const solution = document.getElementById(solution_id)
        if (solution) {
            e.target.appendChild(solution)
            solution.style.display = 'inline-block'
        }

        props.onDrop({ solution: solution_id, space: props.id })
        console.log(solution_id + ' wurde in feld' + props.id + ' geworfen')

        if (solution_id.replace(/\D/g, '') === props.id.replace(/\D/g, '')) {
            console.log('Richtig!')
        } else {
            console.log('Nicht Richtig!')
        }
    }

    const dragOver = (e: any) => {
        e.preventDefault()
    }

    return (
        <span
            className={props.className}
            id={props.id}
            onDrop={drop}
            onDragOver={dragOver}
            onTouchMove={dragOver}
        >
            {props.children}
        </span>
    )
}

export default Space
