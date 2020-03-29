import React from 'react'
import './css/biocard.css'
import { Divider } from 'antd'
const BioCard = () => {
    return(
        <div >
            <div><About/></div>
            <br/>
            <div><Interest/></div>
        </div>
    )
}
const About = () => {
    return(
        <div className="card" data-aos="fade-right">
            <p>
                <p><Divider orientation="left">About Me</Divider></p>
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
        <div className="card" data-aos="fade-left">
            <p>
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