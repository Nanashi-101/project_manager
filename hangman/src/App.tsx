import { useCallback, useEffect, useState } from "react"
import words from './wordList.json'
import HangmanDrawing from "./components/HangmanDrawing"
import HangmanWord from "./components/HangmanWord"
import Keyboard from "./components/Keyboard"

function App() {
  const getWord = () =>{
    return words[Math.floor(Math.random() * words.length)]
  }
  // Creating state for words to guess
  const [wordToGuess, setWordToGuess] = useState(getWord)
  // Creating state for guessed letters
  const [guessedLetter, setGuessedLetter] = useState<string[]>([])

  /* The incorrectGuess array holds the number of incorrect guesses made by the user.
  CALCULATION:
    We filter the letters from the guessedLetters array with all the letter that are not in the wordToGuess word
    and pass the length as prop
  */
  const incorrectGuess = guessedLetter.filter(letter => !wordToGuess.includes(letter)
  )

  const isLoser = incorrectGuess.length >= 6;
  const isWinner = wordToGuess
  .split("")
  .every(letter => guessedLetter.includes(letter))

  const addGuessedLetter = useCallback((letter: string) =>{
    if(guessedLetter.includes(letter) || isLoser || isWinner) return

    /* Here we use the spread operator to open the guessedLetter array and add the letter that is pressed by the user to continue with the game */

    setGuessedLetter(currentLetters => [...currentLetters, letter])
  },[guessedLetter, isLoser, isWinner])

  useEffect(()=>{
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if(!key.match(/^[a-z]$/)) return
      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener("keypress", handler);
    return () =>{
      document.removeEventListener("keypress", handler)
    }
  },[guessedLetter])

  //Enter to refresh
  useEffect(()=>{
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if(key !== 'Enter') return

      e.preventDefault()
      setGuessedLetter([])
      setWordToGuess(getWord())
    }

    document.addEventListener("keypress", handler);
    return () =>{
      document.removeEventListener("keypress", handler)
    }
  },[guessedLetter])
  return (
    <div className="div" style={{
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      gap: "1.7rem",
      margin: "0 auto",
      padding: "0 40px",
      alignItems: "center"
    }}>
      <h1>{isWinner && "Winner - Refresh to play again or Press ENTER"}</h1>
      <h1>{isLoser && "Lost - Refresh to try again or Press ENTER"}</h1>
      <HangmanDrawing numberOfGuesses={incorrectGuess.length}/>
      <HangmanWord 
      reveal={isLoser || isWinner}
      guessedLetter={guessedLetter} 
      wordToGuess={wordToGuess}/>
      <div style={{
        alignSelf:"stretch"
      }}>
        <Keyboard
        disabled={isLoser || isWinner}
        ActiveLetters = {guessedLetter.filter(letter => wordToGuess.includes(letter))} 
        InActiveLetters = {incorrectGuess}
        AddLetters = {addGuessedLetter}
        />
      </div>
    </div>
  )
}

export default App
