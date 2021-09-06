import styled from 'styled-components';

export const Mouse = styled.div`
  width: 12px;
  padding: 3px 6px;
  height: 40px;
  border: 3px solid #fff;
  border-radius: 25px;
  // opacity: 0.5;
  box-sizing: content-box;
  margin: 0 auto;
  position: absolute;
  bottom: 3%;
  left: calc(50% - 6px);
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
