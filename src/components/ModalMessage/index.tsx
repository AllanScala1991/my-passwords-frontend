import { Dialog, Pane } from "evergreen-ui"

interface ModalProps {
    isShow: boolean
    title: string
    onClose: () => void
    message: string
}

export function ModalMessage(props: ModalProps) {
    return (
        <Pane>
            <Dialog
                isShown={props.isShow}
                title={props.title}
                onCloseComplete={props.onClose}
                hasFooter = {false}
            >
                {props.message}
            </Dialog>
        </Pane>
    )
}