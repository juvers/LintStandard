import styled from 'styled-components';
import {
  styleRecastProvider as Provider,
  ComponentProps,
} from 'lib/StyleCreator/';
type Tstringkeys = Record<string, string>;
const VARIANTS = {};

export const HeroBackground: ComponentProps = styled.section`
  background: url(${({image}: Tstringkeys) => image});
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  height: 100vh;
  position: relative;

  ${Provider(VARIANTS)}
`;
