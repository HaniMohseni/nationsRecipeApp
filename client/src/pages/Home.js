import React, {useContext} from 'react'
import Header from '../component/Header'
import styled from 'styled-components';
import { UserConstext } from '../component/UserContext';

const Home=()=> {
    //const {user, setUser} = useContext(UserConstext)
    //setUser(null)
    return (
        <div>
            <Header/>
        </div>
    )
}

export default Home
