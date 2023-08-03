import "./index.css"
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { Button } from "../../components/Button";
import { useState } from "react";
import { loginService } from "../../services/login/login.service";
import jwt from "jwt-decode";
import { ModalMessage } from "../../components/ModalMessage";

export function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isShow, setIsShow] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const loginUser = async () => {
        const response = await loginService(username, password);

        if(response.status != 200) {
            setErrorMessage(response.message)
            setIsShow(true)
        }

        const token: {id: string, name: string} = jwt(response.data.token);

        window.sessionStorage.setItem("token", response.data.token);
        window.localStorage.setItem("id", token.id);
        window.localStorage.setItem("name", token.name);

        return window.location.href = "/home";
    }

    return (
        <div className="loginContainer">
            <ModalMessage 
                isShow = {isShow}
                title = "Ops..."
                onClose={() => setIsShow(false)}
                message = {errorMessage}
            />

            <Logo/>

            <Input 
                placeholder="Digite seu usuário" 
                type="text" 
                fontSize={1.5} 
                onChange={(username: string) => setUsername(username)}
            />

            <Input 
                placeholder="Digite sua senha" 
                type="password" 
                fontSize={1.5}
                onChange={(password: string) => setPassword(password)}
            />

            <Button 
                text="ACESSAR"
                textColor="#FFFFFF"
                backgroundColor="#4CD195"
                onClick={() => loginUser()}
            />

            <div className="linkContainer">
                <a className="registerLink" href="/create/user">Ainda não tem conta? Clique Aqui</a>
            </div>

        </div>
    )
}