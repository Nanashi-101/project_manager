const HEAD = (
    <div style={{
        position: "absolute",
        width: "50px",
        height: "50px",
        border: "10px solid black",
        borderRadius: "100%",
        top: "50px",
        right: "-30px"
    }} />
)

const BODY = (
    <div style={{
        position: "absolute",
        width: "10px",
        height: "100px",
        background: "black",
        top: "120px",
        right: "0px"
    }} />
)

const RIGHT_ARM = (
    <div style={{
        position: "absolute",
        width: "100px",
        height: "10px",
        background: "black",
        top: "150px",
        right: "-100px",
        rotate: "-30deg",
        transformOrigin: "left bottom"
    }} />
)

const LEFT_ARM = (
    <div style={{
        position: "absolute",
        width: "100px",
        height: "10px",
        background: "black",
        top: "150px",
        right: "10px",
        rotate: "30deg",
        transformOrigin: "right bottom"
    }} />
)

const RIGHT_LEG = (
    <div style={{
        position: "absolute",
        width: "100px",
        height: "10px",
        background: "black",
        top: "210px",
        right: "-90px",
        rotate: "60deg",
        transformOrigin: "left bottom"
    }} />
)

const LEFT_LEG = (
    <div style={{
        position: "absolute",
        width: "100px",
        height: "10px",
        background: "black",
        top: "210px",
        right: 0,
        rotate: "-60deg",
        transformOrigin: "right bottom"
    }} />
)

const BODY_PART = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
    numberOfGuesses: number
}

export default function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
    return (
        <div style={{
            position: "relative",
            marginLeft: "100px"
        }}>
            {BODY_PART.slice(0, numberOfGuesses)}
            <div style={{
                height: "50px",
                width: "10px",
                backgroundColor: "black",
                position: "absolute",
                top: 0,
                right: 0
            }} />
            <div style={{
                height: "10px",
                width: "250px",
                backgroundColor: "black",
                marginLeft: "120px"
            }} />
            <div style={{
                height: "400px",
                width: "10px",
                backgroundColor: "black",
                marginLeft: "120px"
            }} />
            <div style={{
                height: "10px",
                width: "250px",
                backgroundColor: "black"
            }} />
        </div>
    )
}
