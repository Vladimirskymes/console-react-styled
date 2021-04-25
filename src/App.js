
import './App.css';
import styled from "styled-components"
import Title from "./components/Title"
import Flex from "./components/Flex"
import Console from "./components/Console"
import Button from "./components/Button"

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
            <Title>
              Console CMD 
            </Title>
      </Flex>
      <Flex flexDirection="column" margin={"10px 0"}>
              <Console/>
              <Button alignSelf="flex-end" >
                Submit
              </Button>
      </Flex>
    </AppWrapper>
    
  );
}

export default App;
