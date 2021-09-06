import styled, {css, StyledComponentBase, StyledProps} from 'styled-components';

import {Div} from '../../base';

import {
  theme,
  getColor,
  getConcreteBreakpointSize,
  getPadding,
  getBorderRadius,
} from '../../config';

const padding = (props: StyledProps<any>) => {
  if (props.fluid) {
    return css`
      padding-right: ${getPadding(props, 'hero', 'fluidRight')};
      padding-left: ${getPadding(props, 'hero', 'fluidLeft')};
    `;
  } else if (props.pill) {
    return css`
      padding: ${getPadding(props, 'hero', 'pill')};
    `;
  }

  return css`
    padding: ${getPadding(props, 'hero', 'default')};
  `;
};

const borderRadius = (props: StyledProps<any>) => {
  if (props.fluid || props.noRadius) {
    return css`
      border-radius: ${getBorderRadius(props, 'hero', 'noRadius')};
    `;
  } else if (props.pill) {
    return css`
      border-radius: ${getBorderRadius(props, 'hero', 'pill')};
    `;
  }

  return css`
    border-radius: ${getBorderRadius(props, 'hero', 'lg')};
  `;
};

const Hero = styled<StyledComponentBase<'div', any, {}, never>>(Div)`
  margin-bottom: 2rem;
  background-color: ${(props) => getColor(props, 'hero', 'backgroundColor')};
  @media (min-width: ${(props) =>
      getConcreteBreakpointSize(props.theme, 'sm')}) {
    padding: ${(props) => {
      if (props.pill) {
        return getPadding(props, 'hero', 'lgPill');
      }

      return getPadding(props, 'hero', 'sm');
    }};
  }
  @media (max-width: ${(props) => getConcreteBreakpointSize(props, 'md')}) {
    padding: ${(props) => {
      if (props.pill) {
        return getPadding(props, 'hero', 'smPill');
      }

      return getPadding(props, 'hero', 'sm');
    }};
  }
  ${(props) => padding(props)};
  ${(props) => borderRadius(props)};
`;

Hero.defaultProps = {
  theme,
};

export {Hero};
