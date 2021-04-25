import React from 'react'
import styled from "styled-components"

const StyledFlex = styled.div`
display: flex;
flex-direction: ${(props) => props.flexDirection || "row"}};
align-items: ${(props) => props.alignItems || "stretch"};
justify-content: ${(props) => props.justifyContent || "stretch"};
margin: ${(props) => props.margin || "0"} ;
`

function Flex(props) {
    return (
        <StyledFlex {...props}>

        </StyledFlex>
    )
}

export default Flex
