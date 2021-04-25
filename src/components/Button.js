import React from 'react'
import styled, {css, keyframes} from "styled-components"


const rotateButton = keyframes`
0% {
    transform: rotateZ(0deg)
}
100%{
    transform: rotateZ(360deg)
}
`;

const StyledButton = styled.button.attrs(props => ({
    outlined: true,
}))`
border: none;
padding: 10px 15px;
fint-size: 18px;
cursor: pointer;
&:focus{
    outline: none;
};
&:hover{
    animation: ${rotateButton} 1s infinite linear;
}
align-self: ${(props) => props.alignSelf || "stretch"};
${
    props=>props.primary && css
    `
    color: ${props => props.color || "white"};
    background: ${props => props.background || "white"};

    `
}
${
    props=>props.outlined && css
    `
    border: 1px solid ${props => props.color || "white"};
    color: ${props => props.color || "white"};
    background: transparent;

    `
}
`

const LargeButton = styled(StyledButton)`
font-size: 32px;
`

function Button(props) {
    return (
        <LargeButton {...props}>
            
        </LargeButton>
    )
}

export default Button
