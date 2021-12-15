import React, {useContext} from 'react'
import { UserConstext } from '../component/UserContext'

const Profile=()=> {
    const {favoritelst, setFavoritelst} = useContext(UserConstext)

    return (
        <div>
           My Favorite Meals are {favoritelst}
        </div>
    )
}

export default Profile
