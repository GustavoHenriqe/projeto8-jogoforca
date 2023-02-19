import { useState } from "react"

import "../css/style.css"

import Jogo from "./Jogo"
import Letras from "./Letras"
import palavras from "../palavras"

import gallowsImages0 from "../assets/forca0.png"
import gallowsImages1 from "../assets/forca1.png"
import gallowsImages2 from "../assets/forca2.png"
import gallowsImages3 from "../assets/forca3.png"
import gallowsImages4 from "../assets/forca4.png"
import gallowsImages5 from "../assets/forca5.png"
import gallowsImages6 from "../assets/forca6.png"

function App() {
  const [ buttonsOffOrTrue, setbuttonOffOrTrue ] = useState(true)
  const [ letterClicked, setletterClicked ] = useState("")

  const  _arrayGallowsImages = [gallowsImages0, gallowsImages1, gallowsImages2, gallowsImages3, gallowsImages4, gallowsImages5, gallowsImages6]

  return (
    <>
      <Jogo 
        arrayGallowsImages={_arrayGallowsImages}
        palavras={palavras}
        setbuttonOffOrTrue={setbuttonOffOrTrue}
        letterClicked={letterClicked}
      />
      <Letras 
        buttonsOffOrTrue={buttonsOffOrTrue}
        setletterClicked={setletterClicked}
      />
    </>
  )
}

export default App
