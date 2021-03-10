import React, { useState } from 'react'
import '../../../styles/WarmCold.scss'
import { Typographie } from '../../reuseabels'

export interface IWarmColdState {
    x: number
    y: number
}

const WarmColdQuiz = () => {
    const [coordinates, setCoordinates] = useState<IWarmColdState>({ x: 0, y: 0 })

    const heandleMouseMove = (e: any) => {
        setCoordinates({ x: e.pageX, y: e.pageY })
    }

    const getDistance = (distance: IWarmColdState) => {
        function Circle(x1: number, y1: number, x2: number, y2: number) {
            return Math.sqrt(Math.abs(x2 - x1) * 2 + Math.abs(y2 - y1) * 2)
        }

        return Circle(90, 90, distance.x, distance.y)
    }

    return (
        <>
            <div className='area' onMouseMove={(e: any) => heandleMouseMove(e)}></div>
            <Typographie type='m'>{getDistance(coordinates)}</Typographie>
        </>
    )
}

export default WarmColdQuiz
