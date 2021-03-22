import IColors from "./hooks.IColors"

export default interface IUseQuiz {
    aColor: IColors
    bColor: IColors
    cColor: IColors
    dColor: IColors
    giveAwnser: any
    setAwnser: any
    status: "waiting" | "ready"
    setStatus: any
    correctly: boolean | undefined
    setCorrectly: any
}