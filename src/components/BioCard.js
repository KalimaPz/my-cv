import React from 'react'
import './css/biocard.css'
const BioCard = () => {
    return(
        <div >
            <div data-aos="fade-up"><About/></div>
            <br/>
            <div data-aos="fade-up"><Interest/></div>
        </div>
    )
}
const About = () => {
    return(
        <div className="card">
            <p data-aos="fade-up">
                <p><b>Date of Birth</b> : 1 January 1997</p>
                <p><b>Education</b> : Faculty of Engineering (Computer Engineering)</p>
                <p><b>Main-Branch</b> : Information Engineering</p>
                <p><b>Sub-Branch</b> : Computer System Design (CSD)</p>
                <p><b>University</b> : Prince of Songkhla University (Phuket Campus)</p>  
                <p><b>Hometown</b> : Nakorn Sri Thammarat</p>  
                <p><b>Lifestyle</b> : Gaming, Coding, Photographing, Cooking</p>  
                
            </p>
        </div>
    )
}
const Interest = () => {
    return(
        <div className="card">
            <p data-aos="fade-up">
                <p><b>Interesting</b></p>
                <ol> - Object-Oriented Programing</ol>
                <ol> - Database Management</ol>
                <ol> - Crossplatform Mobile Application</ol>
                <ol> - Web Application</ol>
                
            </p>
        </div>
    )
} 

export default BioCard