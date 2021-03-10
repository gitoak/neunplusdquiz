import React from 'react'
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript'
import '../../../../styles/DnDPageQuiz.page.scss'

const Space = (props: any) => {
    const drop = (e: any) => {
        e.preventDefault()
        const solution_id = e.dataTransfer.getData('solution_id')

        const solution = document.getElementById(solution_id)
        if (solution) {
            e.target.appendChild(solution)
            solution.style.display = 'inline-block'
        }

        console.log(solution_id + ' wurde in feld' + props.id + ' geworfen')

        if (solution_id.replace(/\D/g,'') === props.id.replace(/\D/g,'')) {
            console.log("Richtig!");
        } else {
            console.log("Nicht Richtig!");
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
