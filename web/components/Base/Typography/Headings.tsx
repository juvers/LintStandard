import styled from 'styled-components';
import {
  styleRecastProvider as Provider,
  ComponentProps,
} from '@lib/StyleCreator/';
import GlobalVariants from '@themes/globalVariants';

export const VARIANTS = {
  ...GlobalVariants,
};

/** @notabene export styled component directly in order to use _sx
 * fluid typography is recommended over logical queries breakpoints
 */
export const H: ComponentProps = styled.h1`
  font-family: Georgia, Times, 'Times New Roman', serif;
  font-size: calc(36px + (84 - 36) * ((100vw - 300px) / (1600 - 300)));
  font-weight: 800;
  letter-spacing: 0.1rem;
  line-height: 1;
  margin-bottom: 3rem;
  font-smooth: antialiased;
  ${Provider(VARIANTS)}
`;
