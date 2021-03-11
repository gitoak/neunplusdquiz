export default interface IMQuiz {
    question: string
    a: string
    b: string
    c: string
    d: string
    solution: "a" | "b" | "c" | "d"
    answer: string
}