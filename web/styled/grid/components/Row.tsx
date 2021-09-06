import styled, {css, StyledComponentBase} from 'styled-components';
import {Div} from '../../base';
const Row = styled<StyledComponentBase<'div', any, {}, never>>(Div)`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

export {Row};
