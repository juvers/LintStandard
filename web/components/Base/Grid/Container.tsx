import styled from 'styled-components';
import {
  styleRecastProvider as Provider,
  ComponentProps,
} from '@lib/StyleCreator/';

const VARIANTS = {
  opacity: (): string => `
background: rgba(0,0,0,0.4); 
`,
  mh100: (): string => `
    height: 100vh;
`,
};
export const Container: ComponentProps = styled.div`
  max-width: 100%;
  margin: auto auto;
  ${Provider(VARIANTS)};
`;
