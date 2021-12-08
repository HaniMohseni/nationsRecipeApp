import React from 'react'
import RandomMeal from '../component/RandomMeal'
import styled from 'styled-components'

const FeaturedMeal=()=> {
    return (
        <Wrapper>
         
            <RandomMeal/>
            
        </Wrapper>
    )
}


const Wrapper = styled.div`
margin-top: 150px;

`


export default FeaturedMeal
