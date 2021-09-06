/* eslint-disable no-unused-vars */
import styled, {css} from 'styled-components';
import {createElement, ReactChild} from 'react';

interface ITheme {
  color?: (colorName: string) => string;
  fontSize?: (size: string) => string;
  fontFamily?: (family: string) => string;
  breakpoint?: (size: string) => string;
}

interface IBaseProps {
  family?: string;
  height?: string;
  weight?: string;
  color?: string;
  background?: string;
  tag: string;
  size?: string;
  uppercase?: boolean;
  showLabel?: boolean;
  theme?: ITheme;
  align?: string;
  children?: ReactChild | ReactChild[];
  onClick?: () => void;
}

interface ITextProps extends IBaseProps {
  uppercase?: boolean;
}

const BaseText = ({tag, children, ...rest}: IBaseProps): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {uppercase, showLabel, ...validAttributes} = rest;
  return createElement(tag, validAttributes, children);
};
export const BaseButton = styled(BaseText)`
  color: ${({color, theme}) => (color ? theme?.color(color) : 'inherit')};
  background: ${({color, theme}) => (color ? theme?.color(color) : 'inherit')};
`;

const SmartText = styled(BaseText)<ITextProps>`
  color: ${({color, theme}) => (color ? theme?.color(color) : 'inherit')};
  font-size: ${({size, theme}) => theme?.fontSize(size)};
  text-transform: ${({uppercase}) => (uppercase ? 'uppercase' : 'inherit')};
  font-weight: ${({weight}) => (weight ? `font-weight: ${weight}` : 'normal')};
  text-align: ${(props) => props.align};
  font-family: ${({family, theme}) =>
    family ? theme?.fontFamily(family) : 'inherit'};
  ${({size, theme}) =>
    size === 'super'
      ? css`
          font-size: ${theme?.fontSize('xxl')};
          line-height: 3rem;
          @media ${theme.breakpoint('small')} {
            font-size: ${theme?.fontSize('big')};
            line-height: ${theme?.fontSize('big')};
            margin-bottom: 1rem;
          }
          @media ${theme.breakpoint('medium')} {
            font-size: ${theme?.fontSize('super')};
            line-height: ${theme?.fontSize('super')};
            margin-bottom: 1rem;
          }
        `
      : null};
`;

export default SmartText;
