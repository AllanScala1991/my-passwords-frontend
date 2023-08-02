import "./index.css"
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { Button } from "../../components/Button";

export function Login() {
    return (
        <div className="loginContainer">
            <Logo/>
            <Input placeholder="Digite seu usuário" type="text" fontSize={1.5} />
            <Input placeholder="Digite sua senha" type="password" fontSize={1.5} />
            <Button 
                text="ACESSAR"
                textColor="#FFFFFF"
                backgroundColor="#4CD195"
            />
            <div className="linkContainer">
                <a className="registerLink" href="">Ainda não tem conta? Clique Aqui</a>
            </div>
        </div>
    )
}