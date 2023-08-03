import "./index.css"
import password32x32 from "../../../public/assets/home/password32x32.png";

export function SmallLogo() {
    return (
        <div className="smallLogoContainer">
            <img src={password32x32} alt="home small logo" className="smallLogoImage" />
            <p className="smallLogoTitle">MY PASSWORDS</p>
        </div>
    )
}