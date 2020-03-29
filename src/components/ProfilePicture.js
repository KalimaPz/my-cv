import React, { useState } from 'react'
import { Avatar } from 'antd'
import axios from 'axios'
import './css/profile.css'
const ProfilePicture = () => {
    const [imageUri, setImageUri] = useState('')
    const getGitHubData = async () => {
        const result = await axios.get(`https://api.github.com/users/KalimaPz`)
        console.log(result.data)
        setImageUri(result.data.avatar_url)
    }
    useState(() => {
        getGitHubData()
    }, [])
    return (
        <div class="profile">
                <Avatar src={imageUri} size={200} />
                <h2><br/>Donnukrit Satirakul<br/></h2>
            
        </div>
    )
}

export default ProfilePicture