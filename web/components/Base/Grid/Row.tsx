import styled from 'styled-components';
import {
  styleRecastProvider as Provider,
  ComponentProps,
} from '@lib/StyleCreator/';

/** @notabene control of geometric layout is best done in rows over containers and columns */
const VARIANTS = {
  reverse: (): string => `
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse !important;
  `,
  center: (): string => `
    display: flex;
    justify-content: center;
    align-items: center; 
  `,

  left: (): string => `
  display: flex;
  justify-content: left;
  align-items: center; 
`,
  mh100: (): string => `
    height: 100vh;
`,

  small: (): string => `
  @media only screen and (max-width: 768px) {
    display: none;
  }
  `,
};
export const Row: ComponentProps = styled.div`
  &::after {
    content: '';
    clear: both;
    display: table;
  }
  ${Provider(VARIANTS)}
`;
