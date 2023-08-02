import "./index.css";

interface ButtonProps {
    text: string
    backgroundColor: string
    textColor: string
    onClick: () => void
}

export function Button(props: ButtonProps) {
    return (
        <div className="buttonsContainer">
            <button 
                className="buttons"
                style={{backgroundColor:props.backgroundColor, color: props.textColor}}
                onClick={props.onClick}
            >{props.text}</button>
        </div>
    )
}