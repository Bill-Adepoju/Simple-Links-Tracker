import slackImg from "../images/slack.png"
import githubImg from "../images/github.png"

export default function Social(){
    return(
        <div className="social-wrapper">
            <img src={slackImg} alt="slack logo" className="social-logo"/>
            <a href="https://github.com/Bill-Adepoju"><img src={githubImg} alt="github logo" className="social-logo"/></a>
        </div>
    )
}