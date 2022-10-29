import ingressiveLogo from "../images/ingressive.png"
import zuriLogo from "../images/zuri.png"

// importing the necessary images 

export default function Footer(){
    return(
        <div className="footerWrap">
            <img src={zuriLogo} alt="zuri logo" className="zuri-logo"/>
            <p className="footer-text">HNG Internship 9 Frontend Task</p>
            <img src={ingressiveLogo} alt="ingressive4good"  className="ingressive-logo"/>
        </div>
    )
}