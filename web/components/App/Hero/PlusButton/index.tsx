import styled from 'styled-components';
import {
  styleRecastProvider as Provider,
  ComponentProps,
} from '@lib/StyleCreator/';

const VARIANTS = {
  rotate: (): string => `
  background-color: #fff;
  & svg{
    transform: rotate(360deg);
  }
    `,
};

/** @notabene export styled component directly in order to use _sx  */
export const PlusButton: ComponentProps = styled.div`
  width: 36px;
  height: 36px;
  cursor: pointer;
  background-color: #f00;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  position: absolute;
  bottom: 5%;
  right: 7%;
  z-index: 2;
  & svg {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    transform: rotate(45deg);
    transition: all 0.2s;
  }
  ${Provider(VARIANTS)}
`;
