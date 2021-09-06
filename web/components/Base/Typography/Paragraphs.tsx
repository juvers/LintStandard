import styled from 'styled-components';
import {
  styleRecastProvider as Provider,
  ComponentProps,
} from '@lib/StyleCreator/';
import GlobalVariants from '@themes/globalVariants';

const VARIANTS = {
  ...GlobalVariants,
};

/** @notabene export styled component directly in order to use _sx
 * fluid typography is recommended over logical queries breakpoints
 */
export const P: ComponentProps = styled.p`
  font-family: Georgia, Times, 'Times New Roman', serif;
  line-height: 1.5;
  ${Provider(VARIANTS)}
`;
