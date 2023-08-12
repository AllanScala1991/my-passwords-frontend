import { Button, Dialog, Pane, TextInputField } from "evergreen-ui";
import { ChangeEvent, useState } from "react";

interface ModalPasswordShowProps {
    isShow: boolean
    onCloseComplete: () => void
    title: string
    username: string
    password: string
    onUpdate: () => void
    onDelete: () => void
    titleOnChange: (value: string) =>  void
    usernameOnChange: (value: string) =>  void
    passwordOnChange: (value: string) => void
}

export function ModalPasswordShow(props: ModalPasswordShowProps) {
    const [edit, setEdit] = useState(false);
    const [title, setTitle] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Pane>
            <Dialog
                isShown={props.isShow}
                title="DETALHES DO REGISTRO"
                onCloseComplete={() => {
                    props.onCloseComplete()
                    setEdit(false)
                    setUsername("");
                    setPassword("");
                }}
                hasFooter={false}
                width={350}
                minHeightContent={350}
                
            >
                {
                    edit ?
                        <div style={{display: "flex", justifyContent:"left", flexDirection:"column"}}>
                            <TextInputField
                                label="Título:"
                                value={title}
                                marginBottom={15}
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setTitle(event.target.value)
                                    props.titleOnChange(event.target.value)
                                }}
                            />
                            <TextInputField
                                label="Usuário:"
                                value={username}
                                marginBottom={15}
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setUsername(event.target.value)
                                    props.usernameOnChange(event.target.value)
                                }}
                            />
                            <TextInputField 
                                label="Senha:"
                                value={password}
                                type="password"
                                marginBottom={10}
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                    setPassword(event.target.value)
                                    props.passwordOnChange(event.target.value)
                                }}
                            /><br/>
                            <Button 
                                width={280}
                                appearance="primary" 
                                intent="success"
                                onClick={() => {
                                    props.onUpdate()
                                    setTitle("");
                                    setUsername("");
                                    setPassword("");
                                    setEdit(false);
                                }}
                            >ATUALIZAR</Button>

                            <Button 
                                width={280}
                                marginTop={15} 
                                appearance="primary" 
                                intent="none"
                                onClick={() => {
                                    setEdit(false);
                                    setTitle("");
                                    setUsername("");
                                    setPassword("");
                                }}
                            >VOLTAR</Button>
                        </div>
                    :
                        <div style={{display: "flex", justifyContent:"left", flexDirection:"column"}}>
                            <TextInputField
                                label="Título:"
                                value={props.title}
                                marginBottom={15}
                            />
                            <TextInputField
                                label="Usuário:"
                                value={props.username}
                                marginBottom={15}
                            />

                            <TextInputField 
                                label="Senha:"
                                value={props.password}
                                marginBottom={10}
                            /><br/>

                            <Button 
                                width={280}
                                appearance="primary" 
                                intent="none"
                                onClick={() => {setEdit(true)}}
                            >EDITAR</Button>

                            <Button 
                                width={280}
                                marginTop={15} 
                                appearance="primary" 
                                intent="danger"
                                onClick={props.onDelete}
                            >DELETAR</Button>
                        </div>
                }
            </Dialog>
        </Pane>
    )
}