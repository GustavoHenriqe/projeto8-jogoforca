export default function Letras({buttonsOffOrTrue, setletterClicked}) {    
    const _alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

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
            </footer> 
        </>
    )
}

function Buttons({buttonsOffOrTrue, letter, setletterClicked}) {

    function disabledButton(element) {
        element.target.disabled = true
        setletterClicked(letter)
    }

    return (
        <button
            disabled={buttonsOffOrTrue} 
            className="button-latters"
            onClick={(element) => disabledButton(element)}
        >
            {letter.toUpperCase()}
        </button>
    )
}