import React from 'react'
import '../../../../styles/DnDPageQuiz.page.scss'

const Option = (props: any) => {
    const dragStart = (e: any) => {
        const target = e.target

        e.dataTransfer.setData('solution_id', target.id)

        setTimeout(() => {
            target.style.display = 'none'
        }, 0)
        console.log(target.id + 'wurde aufgehoben')
    }

    const dragOver = (e: any) => {
        e.stopPropagation()
    }

    const dragEnd = (e: any) => {
        e.preventDefault()
        const target = e.target
        setTimeout(() => {
            target.style.display = 'inline-block'
        }, 0)
        console.log(e.target.id + ' wurde fallen gelassen')
    }

    return (
        <div
            id={props.id}
            className={props.className}
            draggable={props.draggable}
            onDragStart={dragStart}
            onTouchStart={dragStart}
            onDragOver={dragOver}
            onTouchMove={dragOver}
            onDragEnd={dragEnd}
            onTouchEnd={dragEnd}
        >
            {props.children}
        </div>
    )
}

export default Option
