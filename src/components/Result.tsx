import styled from 'styled-components';
import ResultImg from '../svg/Result';

interface ResultProps {
    point: number | null;
   }


const Result = ({point}:ResultProps) => {
    return ( 
        <>
        <ResultWraper>
            <ResultImg />
            <Deshbord>You selected {point} out of 5</Deshbord>
            <Title>Thank you!</Title>
            <Paragraph>
                We appreciate you taking the time to give a rating. If y
                ou ever need more support, don’t hesitate to get in touch!
            </Paragraph>
        </ResultWraper>
        </>
     );
}
 
export default Result;

const ResultWraper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 13px 0px 13px 0px;
    width: 100%;
    @media (max-width: 375px) {
        margin: 10px 0px 10px 0px;
  }
`
const Deshbord = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 193px;
    height: 32px;
    background: #262E38;
    border-radius: 22.5px;
    color: #FC7614;
    font-weight: 400;
    font-size: 15px;
    margin-top: 32px;
    @media (max-width: 375px) {
        margin-top: 24px;
        font-size: 14px;
        line-height: 22px;
  }
`
const Title = styled.h1`
    font-weight: 700;
    font-size: 28px;
    line-height: 35px;
    color: #FFFFFF;
    margin-top: 32px;
    @media (max-width: 375px) {
        margin-top: 24px;
        font-size: 24px;
        line-height: 30px;
  }
`
const Paragraph = styled.p`
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    text-align: center;
    color: #969FAD;
    margin-top: 7px;
    @media (max-width: 375px) {
        margin-top: 10px;
        font-size: 14px;
        line-height: 22px;
  }

`