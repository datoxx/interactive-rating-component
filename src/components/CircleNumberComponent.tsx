import styled from 'styled-components';


interface individvalPointProps {
    pointNum: number;
    point: number | null;
    handlePointClick: (number:number) => void;
   }

const CircleNumberComponent = ({ point, pointNum, handlePointClick}: individvalPointProps) => {
    return ( 
        <CircleNumber 
            pointColor={point === pointNum}
            onClick={() => handlePointClick(pointNum)}
        >
        { pointNum }
        </CircleNumber>
     );
}
 
export default CircleNumberComponent;

interface CircleNumberProps {
    pointColor: boolean;
}

const CircleNumber = styled.span<CircleNumberProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 51px;
  height: 51px;
  background: ${(props) => props.pointColor ? "#7C8798" : "#262E38"};
  color:  ${(props) => props.pointColor ? "#FFFFFF" : "#7c8798"};
  border-radius: 50%;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.2px;
  cursor: pointer;
  &:hover {
    background: #FC7614;
    color: white;
  }
  @media (max-width: 375px) {
    font-size: 14px;
    line-height: 24px;
    width: 42px;
    height: 42px;
  }
`