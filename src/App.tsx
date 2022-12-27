import styled from 'styled-components';
import StartComponent from './components/StartComponent';
import { useState } from 'react';
import Result from './components/Result';



function App() {

    const [point, setPoint] = useState<number | null>(null)
    const [submit, setSubmit] = useState<boolean>(false)


  return (
    <MainComponent>
        <Card>  
          {  point && submit
          ?   <Result point={point} />
          :  <StartComponent point={point} setSubmit={setSubmit} setPoint={setPoint} />
          }
        </Card>
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

const Card = styled.div`
  width: 100%;
  max-width: 412px;
  border-radius: 30px;
  background: radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%);
  padding: 32px;
  @media (max-width: 375px) {
    max-width: 327px;
    margin-left: 24px;
    margin-right: 24px;
    padding: 24px;
    border-radius: 15px;
  }
`;


export default App;
