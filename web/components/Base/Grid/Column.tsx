import styled from 'styled-components';
import {
  styleRecastProvider as Provider,
  ComponentProps,
} from '@lib/StyleCreator/';

/** @notabene if variants are required else then rename exports to be unique and export */

type Tstringkeys = Record<string, string>;

const GLOBAL_VARIANTS = {
  p1: (): string => `
    padding: 1%;
  `,
  p2: (): string => `
    padding: 2%
  `,
  p3: (): string => `
  padding: 3%;
`,
  p4: (): string => `
  padding: 4%
`,
  p5: (): string => `
  padding: 5%;
`,
  p6: (): string => `
  padding: 6%
`,
};

const VARIANTS = {
  ...GLOBAL_VARIANTS,
  w60: (): string => `
    width: 60%;
      `,
  w40: (): string => `
      width: 40%;
        `,
  textWhite: (): string => `
    color: #fff;
  `,
  textDark: (): string => `
    color: #000;
  `,
  smallHero: (): string => `
  @media only screen and (max-width: 768px){
    display: flex;
    align-self: flex-end;
    flex-direction: column;
    background: #000;
    width: 100%;
    padding: 25% 0;      
    flexDirection: column;
  }
  `,
  hideSmall: (): string => `
  @media only screen and (max-width: 768px){
   display: none;
  }`,
};

const getWidthString = (span: string) => {
  if (!span) return;
  const width = (Number(span) / 12) * 100;
  return `width: ${width}%`;
};

/** @notabene ensure component is typed to ComponentProps inorder to use _sx */
export const Column: ComponentProps = styled.div`
  float: left;
  ${({xs}: Tstringkeys) => (xs ? getWidthString(xs) : 'width: 100%')};

  @media only screen and (min-width: 768px) {
    ${({sm}: Tstringkeys) => sm && getWidthString(sm)}
  }
  @media only screen and (min-width: 992px) {
    ${({md}: Tstringkeys) => md && getWidthString(md)}
  }
  @media only screen and (min-width: 1200px) {
    ${({lg}: Tstringkeys) => lg && getWidthString(lg)}
  }
  ${Provider(VARIANTS)}
`;
