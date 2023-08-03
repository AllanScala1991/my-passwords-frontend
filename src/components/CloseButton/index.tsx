import { ArrowLeftIcon, IconButton, Pane, Position, Tooltip } from "evergreen-ui";
import "./index.css";

interface CloseButtonProps {
    onClick: () => void
}

export function CloseButton(props: CloseButtonProps) {
    return (
        <div className="closeButtonContainer">
            <Pane display="flex" justifyContent="space-between">
                <Tooltip content="Voltar" position={Position.LEFT}>
                    <IconButton icon={ArrowLeftIcon} onClick={props.onClick}/>
                </Tooltip>
            </Pane>
        </div>
    )
}