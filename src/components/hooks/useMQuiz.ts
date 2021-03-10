import { useEffect, useState } from 'react'
import IColors from '../../types/hooks.IColors'
import IUseQuiz from '../../types/hooks.IUseMQuiz'

function useQuiz(solution: "a" | "b" | "c" | "d"): IUseQuiz {
    const [status, setStatus] = useState<"waiting" | "ready">("waiting")
    const [awnser, setAwnser] = useState("")
    const [aColor, setAColor] = useState<IColors>({ color: "basic" })
    const [bColor, setBColor] = useState<IColors>({ color: "basic" })
    const [cColor, setCColor] = useState<IColors>({ color: "basic" })
    const [dColor, setDColor] = useState<IColors>({ color: "basic" })

    useEffect(() => {
        if (awnser !== "") {
            if (awnser === solution) {
                switch (awnser) {
                    case "a":
                        setAColor({ color: "success" })
                        break
                    case "b":
                        setBColor({ color: "success" })
                        break
                    case "c":
                        setCColor({ color: "success" })
                        break
                    case "d":
                        setDColor({ color: "success" })
                        break
                }
            } else {
                switch (awnser) {
                    case "a":
                        setAColor({ color: "danger" })
                        break
                    case "b":
                        setBColor({ color: "danger" })
                        break
                    case "c":
                        setCColor({ color: "danger" })
                        break
                    case "d":
                        setDColor({ color: "danger" })
                        break
                }
                switch (solution) {
                    case "a":
                        setAColor({ color: "success" })
                        break
                    case "b":
                        setBColor({ color: "success" })
                        break
                    case "c":
                        setCColor({ color: "success" })
                        break
                    case "d":
                        setDColor({ color: "success" })
                        break
                }
            }
            setStatus("ready")
        }
    }, [awnser, solution])

    const giveAwnser = (awnser: "a" | "b" | "c" | "d") => {
        setAwnser(awnser)
    }

    return { aColor, bColor, cColor, dColor, giveAwnser, status } as const
}

export default useQuiz
