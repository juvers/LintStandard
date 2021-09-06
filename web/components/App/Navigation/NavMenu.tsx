import styled from 'styled-components';
import {
  styleRecastProvider as Provider,
  ComponentProps,
} from 'lib/StyleCreator/';

export const VARIANTS = {
  light: (): string => `
  color: #000;
  background: rgba(255, 255, 255, 0.1);
 `,
  dark: (): string => `
 color: #DBC72A;
 background: rgba(0, 0, 0, 0.1);
 `,
  red: (): string => `
 color: #DBC72A;
 background: rgba(255, 0, 0, 0.1);
 `,
};

export const NavMenu: ComponentProps = styled.header`
  z-index: 1;
  position: fixed;
  width: 100%;
  height: 100px;
  background: rgba(0, 0, 0, 0.1);
  ${Provider(VARIANTS)};
`;
