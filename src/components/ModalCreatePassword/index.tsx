import { Button, Dialog, Pane, TextInputField } from "evergreen-ui";
import { ChangeEvent, useState } from "react";

interface ModalCreatePasswordProps {
    isShown: boolean
    isClose: () => void
    onClick: (title: string, username: string, password: string) => void
}

export function ModalCreatePassword(props: ModalCreatePasswordProps) {
    const [title, setTitle] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

   

    return (
        <>
            <Pane>
                <Dialog
                    title="CADASTRO DE REGISTRO"
                    isShown={props.isShown}
                    onCloseComplete={props.isClose}
                    hasFooter={false}
                    width={350}
                    minHeightContent={300}
                >
                    <div style={{display: "flex", justifyContent:"left", flexDirection:"column"}}>
                        <TextInputField
                        label="Título:"
                        marginBottom={15}
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>{setTitle(event.target.value)}}
                        ></TextInputField>
                        <TextInputField
                        label="Usuário:"
                        marginBottom={15}
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>{setUsername(event.target.value)}}
                        ></TextInputField>
                        <TextInputField
                        label="Senha:"
                        type="password"
                        marginBottom={15}
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>{setPassword(event.target.value)}}
                        ></TextInputField>
                        <Button
                            width={280}
                            appearance="primary" 
                            intent="success"
                            onClick={()=>{
                                props.onClick(title, username, password);
                                setTitle("");
                                setUsername("");
                                setPassword("");
                            }}
                        >CADASTRAR</Button>
                    </div>
                </Dialog>
            </Pane>
        </>
    )
}