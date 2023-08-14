import { Button, RefreshIcon, TextInputField } from "evergreen-ui";
import "./index.css";

interface InputImageProps {
    value: string
    onClick: () => void
}

export function InputImage(props: InputImageProps) {
    return (
        <div className="InputImageContainer">
            <TextInputField 
                readOnly={true}
                label="Gerar senha aleatória"
                placeholder="Ex: #Abc456bc*"
                width={350}
                marginLeft={30}
                value={props.value}
            />
            <Button
                iconBefore={RefreshIcon}
                marginLeft={10}
                onClick={props.onClick}
            >GERAR</Button>
        </div>
    )
}