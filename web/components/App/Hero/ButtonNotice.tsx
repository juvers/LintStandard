import styled from 'styled-components';
import {
  styleRecastProvider as Provider,
  ComponentProps,
} from '@lib/StyleCreator/';
// import GlobalVariants from '@themes/globalVariants';
import {P} from '@components/Base/Typography';

const VARIANTS = {
  close: (): string => `
  bottom: 6%; 
  right: 6%;
  `,
};

/** @notabene export styled component directly in order to use _sx
 * fluid typography is recommended over logical queries breakpoints
 */
export const ButtonNotice: ComponentProps = styled(P)`
  font-family: Georgia, Times, 'Times New Roman', serif;
  color: #fff;
  position: absolute;
  right: 3%;
  bottom: 4%;
  max-width: 7ch;
  @media only screen and (max-width: 768px) {
    display: none;
  }

  ${Provider(VARIANTS)}
`;
