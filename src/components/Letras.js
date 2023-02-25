import { useState } from "react"

export default function Letras({ buttonsOffOrTrue, setletterClicked, settextKick }) {
    const _alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const [ valueInputKick, setvalueInputKick] = useState("")

    function sendTextKick() {
        settextKick(valueInputKick)
        setvalueInputKick("")
    }

    return (
        <>
            <footer className="footer">
                <div className="camp-latters">
                    {_alphabet.map(l => <Buttons
                        key={l}
                        buttonsOffOrTrue={buttonsOffOrTrue}
                        letter={l}
                        setletterClicked={setletterClicked}
                    />)}
                </div>
                <div className="camper-kick">
                    <label>
                        Já sei a Palavra!
                    </label>
                    <input 
                        value={valueInputKick} 
                        type="text"
                        onChange={(element) => setvalueInputKick(element.target.value)} 
                        data-test="guess-input"
                    />
                    <button
                        data-test="guess-button"
                        onClick={sendTextKick}
                    >
                        Chutar 
                    </button>
                </div>
            </footer>
        </>
    )
}

function Buttons({ buttonsOffOrTrue, letter, setletterClicked }) {

    function disabledButton(element) {
        element.target.disabled = true
        setletterClicked(letter)
    }

    return (
        <button
            data-test="letter"
            disabled={buttonsOffOrTrue}
            className="button-latters"
            onClick={(element) => disabledButton(element)}
        >
            {letter.toUpperCase()}
        </button>
    )
}