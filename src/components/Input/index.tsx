import "./index.css"

interface InputProps {
    placeholder: string
    fontSize: number
    type: string
    onChange: (value: string) => void
}

export function Input(props: InputProps) {
    return (
        <div className="inputsContainer">
            <input 
                type={props.type} 
                className="inputs" 
                placeholder={props.placeholder}
                style={{fontSize:props.fontSize + "vh"}}
                onChange={event => {props.onChange(event.target.value)}}
            />
        </div>
    )
}