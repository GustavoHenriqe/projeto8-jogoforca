import { useState } from "react"

export default function Jogo({ arrayGallowsImages, setbuttonOffOrTrue, palavras, letterClickedObject, textKickObject }) {
    const [word, setword] = useState([])
    const [arrayLetters, setarrayLetters] = useState([])
    const [stateLetterClicked, setstateLetterClicked] = useState("")
    const [numberLoss, setnumberLoss] = useState(0)

    const [winOrLose, setwinOrlose] = useState(null)

    function startNewGame() {
        const _wordRandom = palavras[Math.floor(Math.random() * palavras.length)]

        setbuttonOffOrTrue(false)
        setword(_wordRandom.split(""))
        setarrayLetters([])
        setnumberLoss(0)
        setstateLetterClicked("")
        setwinOrlose(null)
        textKickObject.settextKick("")
        letterClickedObject.setletterClicked("")
    }

    function altStateLetterClicked() {

        if (letterClickedObject.letterClicked !== stateLetterClicked) {
            verifiedletterClicked()
            setstateLetterClicked(letterClickedObject.letterClicked)
        }
    }

    function verifiedletterClicked() {
        const _numberActualized = numberLoss + 1
        const _arrayLetterActualized = [...arrayLetters, letterClickedObject.letterClicked]

        if (word.includes(letterClickedObject.letterClicked)) {
            setarrayLetters(_arrayLetterActualized)
        } else {
            setnumberLoss(_numberActualized)
        }
    }

    function verifiedWinOrLose() {
        if (numberLoss == 6) {
            if (winOrLose == false) {
                return
            }
            setwinOrlose(false)
            setbuttonOffOrTrue(true)

        } else if (word == "") {
            return

        } else if (word.filter(le => arrayLetters.includes(le)).join("") === word.join("")) {
            if (winOrLose == true) {
                return
            }
            setwinOrlose(true)
            setbuttonOffOrTrue(true)
        }
    }

    function verifiedKick() {
        if (textKickObject.textKick != "") {
            if (textKickObject.textKick == word) {
                if (winOrLose == true) {
                    return
                }
                setwinOrlose(true)
                setbuttonOffOrTrue(true)

            } else {
                if (winOrLose == false) {
                    return
                }
                setwinOrlose(false)
                setbuttonOffOrTrue(true)
            }
        }
    }

    verifiedKick()
    altStateLetterClicked()
    verifiedWinOrLose()

    return (
        <>
            <main className="main" >
                <img className="image-gallows" src={arrayGallowsImages[numberLoss]} />
                <div className="right">
                    <button
                        className="button-random"
                        onClick={startNewGame}
                    > Escolher Palavra </button>
                    <div
                        className={`camp-laters ${winOrLose == null ? "" : winOrLose ? "win" : "over"}`}
                    >
                        {word.map(le => {

                            if (winOrLose == null) {
                                return arrayLetters.includes(le) ? le : "_"

                            } else {
                                return le
                            }

                        })}
                    </div>
                </div>
            </main>
        </>
    )
}
