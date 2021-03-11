import IColors from "./hooks.IColors"

export default interface IUseQuiz {
    aColor: IColors
    bColor: IColors
    cColor: IColors
    dColor: IColors
    giveAwnser: any
    status: "waiting" | "ready"
    correctly: boolean | undefined
}