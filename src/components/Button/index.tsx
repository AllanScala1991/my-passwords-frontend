import "./index.css";

interface ButtonProps {
    text: string
    backgroundColor: string
    textColor: string
    onClick: () => void
    width: number
    height: number
}

export function Button(props: ButtonProps) {
    return (
        <div className="buttonsContainer">
            <button 
                className="buttons"
                style={{backgroundColor:props.backgroundColor, color: props.textColor, width: `${props.width}px`, height: `${props.height}vh`}}
                onClick={props.onClick}
            >{props.text}</button>
        </div>
    )
}