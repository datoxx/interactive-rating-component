import styled from 'styled-components';
import CircleNumberComponent from './CircleNumberComponent';

interface PointProps {
  point: number | null;
  setPoint: (point:number | null) => void;
 }

 function StartComponent({point, setPoint}:PointProps ) {

  const pointArray: number[] = [1,2,3,4,5];
  
  const handlePointClick = (param:number) => {
    setPoint(param)
  }

  return (
    <Card>
      <Circle>
      <svg
       width="17" 
       height="16" 
       xmlns="http://www.w3.org/2000/svg"
       >
        <path
          d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 
            .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 
            1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77
            0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 
            .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
          fill="#FC7614"/>
      </svg>
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
      <Button>SUBMIT</Button>
    </Card>
  )
}

export default StartComponent;




const Card = styled.div`
  width: 100%;
  max-width: 412px;
  border-radius: 30px;
  background: radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%);
  padding: 32px;
  @media (max-width: 375px) {
    margin: 24px;
    padding: 24px;
    border-radius: 15px;
  }
`;

const Circle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background: #262E38;
  border-radius: 50%;

`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 35px;
  color: #FFFFFF;
  margin-top: 30px;
`;

const Paragraph = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  color: #969FAD;
  margin-top: 7px;

`;

const PointsWraper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 21px;
  margin-top: 24px;
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
`