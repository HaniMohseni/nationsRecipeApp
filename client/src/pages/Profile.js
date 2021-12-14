import React from 'react'

const Profile=()=> {
    return (
        <div>
           Profile of {localStorage.getItem('Token')} 
        </div>
    )
}

export default Profile
