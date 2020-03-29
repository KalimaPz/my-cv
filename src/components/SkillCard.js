import React from 'react'
import {Divider} from 'antd'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPython, faDocker, faGit, faReact, faCss3, faHtml5, faJs, faJava } from '@fortawesome/free-brands-svg-icons'
import './css/skillcard.css'
import flutter from '../asset/flutter-icon.svg'
import dart from '../asset/Dart-logo-wordmark.svg'
import './css/animate.css'
const SkillCard = () => {
    return(
        <div className="card-box" data-aos="fade-up">
        <Divider orientation="left">Programing Skills</Divider>
            <Divider>Basic</Divider>
            <BasicBox/>
            <Divider>Intermediate</Divider>
            <InterBox/>
            <Divider>Expert</Divider>
            <ExpertBox/>
        </div>
    )
}

const BasicBox = () => {
    return(
        <div className="card skill-box" data-aos="fade-right">
            <FontAwesomeIcon icon={faPython} size="4x" />
            <FontAwesomeIcon icon={faDocker} size="4x"/>
            <FontAwesomeIcon icon={faGit} size="4x"/>
            
        </div>
    )
}

const InterBox = () => {
    return(
        <div className="card skill-box" data-aos="fade-right">
            <FontAwesomeIcon icon={faReact} size="4x"/>
            <FontAwesomeIcon icon={faCss3} size="4x"/>
            <FontAwesomeIcon icon={faHtml5} size="4x"/>
            <FontAwesomeIcon icon={faJs} size="4x"/>
        </div>
    )
}

const ExpertBox = () => {
    return(
        <div className="card skill-box" data-aos="fade-right">
            <FontAwesomeIcon icon={faJava} size="4x"/>
            <img src={flutter} width="45"></img>
            <img src={dart} width="120"></img>
        </div>
    )
}

export default SkillCard