import styled from 'styled-components';
import {
  styleRecastProvider as Provider,
  ComponentProps,
} from '@lib/StyleCreator/';

const VARIANTS = {
  white: (): string => `
  height: 5px;
  width: 30%;
  `,
  smallHr: (): string => `
    @media only screen and (max-width: 768px){
      background: #f00;
    }
  `,
};
export const HR: ComponentProps = styled.hr`
  margin: auto auto;
  background: #fff;
  border: none;

  ${Provider(VARIANTS)}
`;
