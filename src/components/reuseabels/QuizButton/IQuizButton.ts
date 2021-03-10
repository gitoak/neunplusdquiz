import React from 'react'

export default interface IQuizButton {
    color: "success" | "danger" | "basic"
    deactivated?: boolean
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    children: React.ReactNode
    className?: string
}