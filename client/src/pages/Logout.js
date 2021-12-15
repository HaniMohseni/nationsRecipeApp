
//This page will not be seen 
//just as an intermediate page and will only direct me to the login page

import React, {useContext} from 'react'
import { UserConstext } from '../component/UserContext'
import { useNavigate } from 'react-router'



const Logout=()=> {
const {user, setUser} = useContext(UserConstext)
setUser(null)
const navigate = useNavigate();
navigate('/login')

    return (
        <div>
            
        </div>
    )
}

export default Logout
