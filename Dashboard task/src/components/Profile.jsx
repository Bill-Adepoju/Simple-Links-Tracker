import profileImg from "../images/profile-img.jpg"

// This component contains the proile/header section 

export default function Profile(){
    return(
        <div className="profile-wrapper">
            <img src={profileImg} alt="profile image" id="profile__img"/>
            <div className="twitter-section">
                <p id="twitter">twitter username: @iwillbegod_</p>
            </div>
            <div className="slack-section">
                <p id="slack">slack username: William</p>
            </div>
        </div>
    )
}