import styled from 'styled-components';
import {
  styleRecastProvider as Provider,
  ComponentProps,
} from 'lib/StyleCreator/';
const VARIANTS = {
  light: (): string => `
    color: #000;
    background: rgba(255, 255, 255, 0.);
   `,
  dark: (): string => `
   color: #fff;
   background: rgba(0,0,0,0.2);
   `,
};

export const HeroBgComponent: ComponentProps = styled.section`
  background: url(${(props: {bg: string}) => props.bg});
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  height: 100vh;
  position: relative;

  ${Provider(VARIANTS)}
`;
