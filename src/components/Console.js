import React from 'react'
import styled from "styled-components"

const StyledConsole = styled.textarea`
width: 100%;
height: 70vh;
color: ${({color}) => color || "white"};
background-color: black;
font-size: 24px;
border: none;
resize: none;
&:focus {
    outline: none;
}
`

function Console(props) {
    return (
       <StyledConsole {...props}>

       </StyledConsole>
    )
}

export default Console
