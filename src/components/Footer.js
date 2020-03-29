import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook,faGithub,faInstagram,faGitlab} from '@fortawesome/free-brands-svg-icons'
import './css/footer.css'
import './css/animate.css'

const Footer = () => {
    return(
        <div className="footer">
            <p id="con-fb" ><a href="https://www.facebook.com/phone.dnk"><FontAwesomeIcon icon={faFacebook} size="4x"/></a></p>
            <p id="con-ig" ><a href="https://www.instagram.com/dk.p97"><FontAwesomeIcon icon={faInstagram} size="4x"/></a></p>
            <p id="con-gh" ><a href="https://www.github.com/KalimaPz"><FontAwesomeIcon icon={faGithub} size="4x"/></a></p>
            <p id="con-gl" ><a href="https://www.gitlab.com/kalima007c"><FontAwesomeIcon icon={faGitlab} size="4x"/></a></p>
        </div>
    )
} 


export default Footer