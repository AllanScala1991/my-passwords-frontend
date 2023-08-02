import "./index.css";

interface ButtonProps {
    text: string
    backgroundColor: string
    textColor: string
}

export function Button(props: ButtonProps) {
    return (
        <div className="buttonsContainer">
            <button 
                className="buttons"
                style={{backgroundColor:props.backgroundColor, color: props.textColor}}
            >{props.text}</button>
        </div>
    )
}