import styles from '../assets/keyboard.module.css'
const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]

type KeyboardProps = {
  ActiveLetters: string[],
  InActiveLetters: string[],
  AddLetters: (letter: string) => void,
  disabled?: boolean
}
export default function Keyboard({ ActiveLetters, InActiveLetters, AddLetters, disabled=false }: KeyboardProps) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(75px, 1fr))",
      gap: ".5rem"
    }}>
      {KEYS.map(key => {
        const isActive = ActiveLetters.includes(key)
        const isInActive = InActiveLetters.includes(key)
        return (
          <button onClick={()=>AddLetters(key)} className={`${styles.btn} ${isActive? styles.active : ""} ${isInActive? styles.inactive : ""}`} disabled={isActive || isInActive || disabled} key={key}>{key}</button>
        )
      })}
    </div>
  )
}
