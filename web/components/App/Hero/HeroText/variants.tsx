import styled from 'styled-components';
import {
  styleRecastProvider as Provider,
  ComponentProps,
} from 'lib/StyleCreator/';
const VARIANTS = {
  skincolor: (): string => `
    color: #e35d6a;
   `,
  lightgreen: (): string => `
   color: #c2f2d0;
   `,
  bloodred: (): string => `
   color: #f00;`,
};

export const HeroTextComponent: ComponentProps = styled.div`
  justify-content: center;
  align-items: center;
  color: #000;
  /* max-width: 60%; */
  font-size: 32px;
  & p {
    text-align: justify;
    font-size: 24px;
  }
  ${Provider(VARIANTS)}
`;
