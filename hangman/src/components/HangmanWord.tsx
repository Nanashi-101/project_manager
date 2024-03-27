export default function HangmanWord() {
    const word = "test"
    const guessedLetter = ["t", "s"];
    return (
        <div style={{
            display: "flex",
            gap: ".25em",
            fontSize: "6rem",
            fontWeight: "bolder",
            textTransform: "uppercase",
            fontFamily: "monospace"
        }}>
            {word.split("").map((letter, index) => (
                <span style={{
                    borderBottom: "10px solid black"
                }} key={index}>
                    <span style={{
                        visibility: guessedLetter.includes(letter) ? "visible" : "hidden"
                    }}>{letter}</span>
                </span>
            ))}
        </div>
    )
}
