export default interface IState {
    score: number
    played: {
        type: "m" | "d"
        id: number
        correctly: boolean
    }[]
    round: number
    current?: {
        type: "m" | "d"
        id: number
    }
}