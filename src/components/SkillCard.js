import React from 'react'
import {Divider} from 'antd'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPython, faDocker, faGit, faReact, faCss3, faHtml5, faJs, faJava } from '@fortawesome/free-brands-svg-icons'
import './css/skillcard.css'
const SkillCard = () => {
    return(
        <div className="card-box">
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
        <div className="card skill-box">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <FontAwesomeIcon icon={faDocker} size="3x"/>
            <FontAwesomeIcon icon={faGit} size="3x"/>
            
        </div>
    )
}

const InterBox = () => {
    return(
        <div className="card skill-box">
            <FontAwesomeIcon icon={faReact} size="3x"/>
            <FontAwesomeIcon icon={faCss3} size="3x"/>
            <FontAwesomeIcon icon={faHtml5} size="3x"/>
            <FontAwesomeIcon icon={faJs} size="3x"/>
        </div>
    )
}

const ExpertBox = () => {
    return(
        <div className="card skill-box">
            <FontAwesomeIcon icon={faJava} size="3x"/>
        </div>
    )
}

export default SkillCard