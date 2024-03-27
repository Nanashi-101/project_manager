import { useState } from "react"
import words from './wordList.json'
import HangmanDrawing from "./components/HangmanDrawing"
import HangmanWord from "./components/HangmanWord"
import Keyboard from "./components/Keyboard"

function App() {
  // Creating state for words to guess
  const [wordGuess, setWordGuess] = useState((): string => {
    return words[Math.floor(Math.random() * words.length)]
  })
  // Creating state for guessed letters
  const [guessedLetter, setGuessedLetter] = useState<string[]>([])
  return (
    <div className="div" style={{
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      margin: "0 auto",
      padding: "0 40px",
      alignItems: "center"
    }}>
      <h1>Loss | Win</h1>
      <HangmanDrawing />
      <HangmanWord />
      <div style={{
        alignSelf:"stretch"
      }}>
        <Keyboard />
      </div>
    </div>
  )
}

export default App
