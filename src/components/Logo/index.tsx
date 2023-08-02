import "./index.css"
import password128x128 from "../../../public/assets/login/password128x128.png";

export function Logo() {
    return (
        <div className="logoContainer">
            <img src={password128x128} alt="login logo" className="logoImage" />
            <p className="logoTitle">MY PASSWORDS</p>
        </div>
    )
}