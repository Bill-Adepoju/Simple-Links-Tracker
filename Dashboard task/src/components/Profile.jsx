import profileImg from "../images/profile-img.jpg"

// This component contains the proile/header section 

export default function Profile(){
    return(
        <div className="profile-wrapper">
            <img src={profileImg} alt="profile image" id="profile__img"/>
            <div className="slack-section">
                <p id="twitter"> Twitter Username : Anomandar FE</p>
                {/* <p id="slack">slack username: @William69</p> */}
            </div>
        </div>
    )
}