import styled from 'styled-components';
import {
  styleRecastProvider as Provider,
  ComponentProps,
} from '@lib/StyleCreator/';

const VARIANTS = {};
export const Main: ComponentProps = styled.main`
  ${Provider(VARIANTS)}
`;
