import styled from 'styled-components';
import StartComponent from './components/StartComponent';
import { useState } from 'react';



function App() {

    const [point, setPoint] = useState<number | null>(null)
    console.log("qu;a", point)

  return (
  <MainComponent>
    <StartComponent point={point} setPoint={setPoint} />
  </MainComponent>
  );
}


 
const MainComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #131518;
`;




export default App;
