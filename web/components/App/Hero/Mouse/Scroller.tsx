import styled, {keyframes} from 'styled-components';

const scroll = keyframes`
0% {transform: translate(0, 0);}
90% {transform: translateY(35px);}
100% {opacity: 0;}
`;

export const Scroller = styled.div`
  height: 8px;
  width: 8px;
  margin: 0 auto;
  border-radius: 50%;
  background-color: #fff;
  animation: ${scroll} 3s infinite;
  animation-direction: alternate;
`;
