type HangmanWordProps = {
    guessedLetter: string[],
    wordToGuess: string,
    reveal?: boolean
}

export default function HangmanWord({guessedLetter, wordToGuess, reveal = false}:HangmanWordProps) {
    // const word = "test"
    // const guessedLetter = ["t", "s"];
    return (
        <div style={{
            display: "flex",
            gap: ".25em",
            fontSize: "6rem",
            fontWeight: "bolder",
            textTransform: "uppercase",
            fontFamily: "monospace"
        }}>
            {wordToGuess.split("").map((letter, index) => (
                <span style={{
                    borderBottom: "10px solid black"
                }} key={index}>
                    <span style={{
                        visibility: (guessedLetter.includes(letter) || reveal) ? "visible" : "hidden",
                        color: !guessedLetter.includes(letter) && reveal?"red":"black"
                    }}>{letter}</span>
                </span>
            ))}
        </div>
    )
}
