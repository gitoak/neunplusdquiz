import { ReactNode } from "react"

export default interface IPopupQuiz {
    question: string
    a: string
    b: string
    c: string
    d: string
    solution: "a" | "b" | "c" | "d"
    answer: string
    children?: ReactNode
    isCorrectly: any
}