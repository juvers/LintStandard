import styled from 'styled-components';
import {
  styleRecastProvider as Provider,
  ComponentProps,
} from 'lib/StyleCreator/';
const VARIANTS = {
  light: (): string => `
    color: #000;
    background: rgba(255, 255, 255, 0.1);
   `,
  dark: (): string => `
   color: #DBC72A;
   `,
};

export const HeaderLogo: ComponentProps = styled.a`
  color: white;
  background: rgba(0, 0, 0, 0.1);
  display: inline-block;
  padding: 0px 30px;
  height: 100px;
  line-height: 60px;
  text-align: center;
  font-family: 'Roboto Slab', serif;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 700;
  width: 200px;
  ${Provider(VARIANTS)}
`;
