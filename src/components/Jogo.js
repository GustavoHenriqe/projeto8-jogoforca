import { useState } from "react"

export default function Jogo({arrayGallowsImages, setbuttonOffOrTrue, palavras, letterClicked}) {
    const [ word, setword ] = useState("")
    const [ arrayLetters, setarrayLetters ] = useState([])
    const [ stateLetterClicked, setstateLetterClicked ] = useState("")
    const [ numberLoss, setnumberLoss ] = useState(0)


    function startNewGame() {
        const _wordRandom = palavras[Math.floor(Math.random() * palavras.length)]

        setbuttonOffOrTrue(false)
        setword(_wordRandom)
        setarrayLetters([])
        setnumberLoss(0)
    }

    function altStateLetterClicked() {
        if (letterClicked !== stateLetterClicked) {
            verifiedletterClicked()
            setstateLetterClicked(letterClicked)
        }
    }

    function verifiedletterClicked(){
        if( word.includes(letterClicked) ) {
            setarrayLetters([...arrayLetters, letterClicked])

        }else{
            setnumberLoss(numberLoss + 1)
        }
    }

    function verifiedWinOrLose() {
        if ( numberLoss > 6 ) {
            
        }
    }

    verifiedWinOrLose()

    altStateLetterClicked()

    console.log(arrayLetters)
    return (
        <>
            <main className="main" >
                <img className="image-gallows" src={arrayGallowsImages[numberLoss]} />
                <div className="right">
                    <button 
                        className="button-random"
                        onClick={startNewGame} 
                    > Escolher Palavra </button>
                    <div className="camp-laters">
                        {word.split("").map(e => arrayLetters.includes(e)? e : "_")}
                    </div>
                </div>
            </main>
        </>
    )
}
