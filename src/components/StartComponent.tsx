import styled from 'styled-components';
import CircleNumberComponent from './CircleNumberComponent';
import Star  from '../svg/Star';

interface PointProps {
  point: number | null;
  setPoint: (point:number | null) => void;
  setSubmit: (submit:boolean) => void;
 }

 function StartComponent({point, setSubmit, setPoint}:PointProps ) {

  const pointArray: number[] = [1,2,3,4,5];
  
  const handlePointClick = (param:number) => {
    setPoint(param)
  }

  return (
    <>
      <Circle>
        <Star />
      </Circle>
      <Title>
        How did we do?
      </Title>
      <Paragraph>
        Please let us know how we did with your support request. 
        All feedback is appreciated to help us improve our offering!
      </Paragraph>
      <PointsWraper>
       {pointArray.map((pointNum) =>
         <CircleNumberComponent point={point} pointNum={pointNum} handlePointClick={handlePointClick} />
        )}
      </PointsWraper>
      <Button onClick={() => setSubmit(true)}>SUBMIT</Button>
    </>
  )
}

export default StartComponent;




const Circle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background: #262E38;
  border-radius: 50%;
  @media (max-width: 375px) {
    width: 40px;
    height: 40px;
  }

`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 35px;
  color: #FFFFFF;
  margin-top: 30px;
  @media (max-width: 375px) {
    margin-top: 16px;
    font-size: 24px;
    line-height: 30px;
  }
`;

const Paragraph = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  color: #969FAD;
  margin-top: 7px;
  @media (max-width: 375px) {
    margin-top: 10px;
    font-size: 14px;
    line-height: 22px;
  }
`;

const PointsWraper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 21px;
  margin-top: 24px;
  @media (max-width: 375px) {
    gap: 18px;
  }
`

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;
  text-transform: uppercase;
  letter-spacing: 2px;
  background: #FC7614;
  border-radius: 22.5px;
  color: #FFFFFF;
  padding: 11px 0px;
  margin-top: 32px;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: white;
    color: #fc7614;
  }
  @media (max-width: 375px) {
    margin-top: 24px;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 1.86667px;
  }
`