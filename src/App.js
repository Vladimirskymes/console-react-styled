
import './App.css';
import styled from "styled-components"
import Title from "./components/Title"
import Flex from "./components/Flex"


const AppWrapper = styled.div`
width: 100%;
min-height: 100vh;
background-color: black;
margin: 0;
padding: 2rem;
color: white;
`;
function App() {
  return (
    <AppWrapper>
      <Flex justifyContent = "center" >
            <Title color={"green"}>
              Console CMD 
            </Title>
      </Flex>
    </AppWrapper>
    
  );
}

export default App;
