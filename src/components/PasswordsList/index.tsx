import { Table } from "evergreen-ui"
import { ModalPasswordShow } from "../ModalPasswordShow"
import { useState } from "react"
import { showPassword } from "../../services/showPassword/showPassword.service"
import { deletePasswordById } from "../../services/deletePasswordById/deletePasswordById.service"
import { updatePasswordById } from "../../services/updatePasswordById/updatePasswordById.service"
import { ModalMessage } from "../ModalMessage"

interface PasswordListProps {
    passwords: {
        id: string
        title: string
        username: string
        updatedAt: Date
    }[]
    onUpdatePasswordTable: () => void
}

export function PasswordList(props: PasswordListProps) {
    const [passwordShow, setPasswordShow] = useState(false);
    const [password, setPassword] = useState({
        id: "",
        title: "",
        username: "",
        password: ""
    })
    const [messageVisible, setMessageVisible] = useState(false);
    const [message, setMessage] = useState("");
    const [messageTitle, setMessageTitle] = useState("");
    const [titleUpdateValue, setTitleUpdateValue] = useState("");
    const [usernameUpdateValue, setUsernameUpdateValue] = useState("");
    const [passwordUpdateValue, setPasswordUpdateValue] = useState("");

    const decryptedPassword = async (passwordId: string) => {
        const response = await showPassword(passwordId);

        if(response.status != 200) return "ERROR";

        return response.data.decriptedPassword;
    }

    const deletePassword = async (passwordId: string) => {
        await deletePasswordById(passwordId);
        setPasswordShow(false);
        props.onUpdatePasswordTable();
    }

    const updatePassword = async (id: string, title: string, username: string, password: string) => {
        const response = await updatePasswordById({id, title, username, password});

        if(response.status != 200) {
            setMessageTitle("Ops...");
            setMessage(`${response.message}`);
            setMessageVisible(true);
        }

        setMessageTitle("Sucesso!");
        setMessage(`${response.message}`);
        setMessageVisible(true);
        setPasswordShow(false);
        props.onUpdatePasswordTable();
    }

    return (
        <>
            <ModalPasswordShow 
                isShow={passwordShow}
                onCloseComplete={() => {setPasswordShow(false)}}
                title={password.title}
                username={password.username}
                password={password.password}
                onUpdate={() => {updatePassword(password.id, titleUpdateValue, usernameUpdateValue, passwordUpdateValue)}}
                onDelete={() => {deletePassword(password.id)}}
                titleOnChange={(event: string) => {setTitleUpdateValue(event)}}
                usernameOnChange={(event: string) => {setUsernameUpdateValue(event)}}
                passwordOnChange={(event: string) => {setPasswordUpdateValue(event)}}
            />
            <ModalMessage 
                 isShow = {messageVisible}
                 title = {messageTitle}
                 onClose={() => setMessageVisible(false)}
                 message = {message}
            />
            <Table>
                <Table.Head>
                    <Table.TextHeaderCell>Titulo</Table.TextHeaderCell>
                    <Table.TextHeaderCell>Usuário</Table.TextHeaderCell>
                    <Table.TextHeaderCell>Senha</Table.TextHeaderCell>
                    <Table.TextHeaderCell>Ultima Atualização</Table.TextHeaderCell>
                </Table.Head>
                <Table.Body height={450}>
                    {props.passwords.map((password) => (
                        <Table.Row key={password.id} isSelectable onSelect={async () => {
                            const getPassword = await decryptedPassword(password.id)
                            setPassword({
                                id: password.id,
                                title: password.title,
                                username: password.username,
                                password: getPassword
                            })
                            setPasswordShow(true)
                        }}>
                            <Table.TextCell>{password.title}</Table.TextCell>
                            <Table.TextCell>{password.username}</Table.TextCell>
                            <Table.TextCell>{"**********"}</Table.TextCell>
                            <Table.TextCell>{`${password.updatedAt}`}</Table.TextCell>
                        </Table.Row>
                    ))

                    }
                </Table.Body>
            </Table>

        </>
    )
}