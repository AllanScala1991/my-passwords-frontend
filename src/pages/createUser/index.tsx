import { useState } from "react";
import { Button } from "../../components/Button";
import { CloseButton } from "../../components/CloseButton";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import "./index.css";
import { createUserService } from "../../services/createUser/createUser.service";
import { ModalMessage } from "../../components/ModalMessage";

export function CreateUser() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("");
    const [isShow, setIsShow] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const createUser = async () => {
        const response = await createUserService({
            name: name,
            email: email,
            username: username,
            password: password
        });

        if(response.status != 201) {
            setTitle("Ops...")
            setErrorMessage(response.message)
            setIsShow(true)
            return
        }
        setTitle("Sucesso!!");
        setErrorMessage("Parabéns, seu usuário foi criado com sucesso.");
        setIsShow(true);
        document.querySelectorAll("input").forEach((item) => {
            if(item) item.value = ""
        })
        return
    }

    return (
        <div className="createUserContainer">
            <ModalMessage 
                isShow = {isShow}
                title = {title}
                onClose={() => setIsShow(false)}
                message = {errorMessage}
            />
            <CloseButton onClick={() => {window.location.href = "/"}}/>
            <Logo/>
            <span className="inputText">Nome Completo:</span>
            <Input 
                placeholder="Digite seu nome completo" 
                type="text" 
                fontSize={1.5} 
                onChange={(name: string) => setName(name)}
            />
            <span className="inputText">Email:</span>
            <Input 
                placeholder="Digite seu email" 
                type="text" 
                fontSize={1.5} 
                onChange={(email: string) => setEmail(email)}
            />
            <span className="inputText">Usuário:</span>
            <Input 
                placeholder="Digite seu usuário" 
                type="text" 
                fontSize={1.5} 
                onChange={(username: string) => setUsername(username)}
            />
            <span className="inputText">Senha:</span>
            <Input 
                placeholder="Digite sua senha" 
                type="password" 
                fontSize={1.5} 
                onChange={(password: string) => setPassword(password)}
            />
             <Button 
                text="SALVAR"
                textColor="#FFFFFF"
                backgroundColor="#4CD195"
                onClick={() => createUser()}
            />
        </div>
    )
}