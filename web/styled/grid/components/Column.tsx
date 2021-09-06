import {theme, getConcreteBreakpointSize} from '../../config';
import styled, {css, StyledComponentBase, StyledProps} from 'styled-components';
import {Div} from '../../base';
const cols = 12;

const percentage = (value: number) => `${100 * value}%`;

export const columnStyleForSize = (size: number) => css`
  flex: 0 0 ${percentage(size / cols)};
  max-width: ${percentage(size / cols)};
`;

export const columnStyleForOffset = (offset: number) => css`
  margin-left: ${percentage(offset / cols)};
`;

const hasSize = (props: StyledProps<any>) =>
  props.xs || props.sm || props.md || props.lg || props.xl;

const Column = styled<StyledComponentBase<'div', any, {}, never>>(Div)`
  box-sizing: border-box;
  position: relative;
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;

  ${(props) => props.xs && columnStyleForSize(props.xs)}
  ${(props) => props.xsOffset && columnStyleForOffset(props.xsOffset)}

  @media (min-width: ${(props) => getConcreteBreakpointSize(props, 'sm')}) {
    ${(props) =>
      !hasSize(props) &&
      css`
        flex-basis: 0;
        flex-grow: 1;
      `}

    ${(props) => props.sm && columnStyleForSize(props.sm)}
    ${(props) => props.smOffset && columnStyleForOffset(props.smOffset)}
  }
  @media (min-width: ${(props) => getConcreteBreakpointSize(props, 'md')}) {
    ${(props) => props.md && columnStyleForSize(props.md)}
    ${(props) => props.mdOffset && columnStyleForOffset(props.mdOffset)}
  }
  @media (min-width: ${(props) => getConcreteBreakpointSize(props, 'lg')}) {
    ${(props) => props.lg && columnStyleForSize(props.lg)}
    ${(props) => props.lgOffset && columnStyleForOffset(props.lgOffset)}
  }
  @media (min-width: ${(props) => getConcreteBreakpointSize(props, 'xl')}) {
    ${(props) => props.xl && columnStyleForSize(props.xl)}
    ${(props) => props.xlOffset && columnStyleForOffset(props.xlOffset)}
  }
`;

Column.defaultProps = {
  theme,
};

export {Column};
