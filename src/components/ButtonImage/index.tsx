import "./index.css";

interface ButtonImageProps {
    url: string
    text: string
    onClick: () => void
}

export function ButtonImage(props: ButtonImageProps){
    return (
        <div className="buttonImageContainer" onClick={props.onClick}>
            <img src={props.url} alt="button icon" className="buttonImage" />
            <span className="buttonImageText">{props.text}</span>
        </div>
    )
}