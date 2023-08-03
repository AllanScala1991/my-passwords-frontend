import "./index.css";
import profileImage from "../../../public/assets/home/user.png";
import passwordImage from "../../../public/assets/home/list.png";
import groupImage from "../../../public/assets/home/group.png";
import logoutImage from "../../../public/assets/home/logout.png";
import { ButtonImage } from "../ButtonImage";

export function BaseMenu() {
    return (
        <div className="baseMenuContainer">
            <ButtonImage 
                url={profileImage}
                text="Perfil"
                onClick={() => {""}}
            />

            <ButtonImage 
                url={passwordImage}
                text="Senhas"
                onClick={() => {""}}
            />

            <ButtonImage 
                url={groupImage}
                text="Grupos"
                onClick={() => {""}}
            />

            <ButtonImage 
                url={logoutImage}
                text="Sair"
                onClick={() => {""}}
            />
        </div>
    )
}