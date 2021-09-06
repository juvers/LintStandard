import {theme as defaultTheme} from '../theme';
import {ThemedStyledProps, StyledProps} from 'styled-components';
import {ButtonProps} from '..';

export type Theme = typeof defaultTheme;
export type ThemedProps<T extends {}> = ThemedStyledProps<T, Theme>;
export const getConfigProperty = (
  theme: StyledProps<any>,
  ...propertyPath: string[]
) => {
  // Function for getting values from themes
  const getterFunction = (...path: StyledProps<any[]>) =>
    getConfigProperty(theme, ...path);

  // Function for gettings values from objects while 'dereferencing' all
  // functional values
  const receiveValueSafe = (
    initialValue: {
      colorScheme: {
        primaryLight: string;
        primaryLighter: string;
        primary: string;
        primaryDarker: string;
        primaryDark: string;
        primaryDarkest: string;
        primaryBoxShadow: string;
        secondaryLight: string;
        secondaryLighter: string;
        secondary: string;
        secondaryDarker: string;
        secondaryDark: string;
        secondaryDarkest: string;
        secondaryBoxShadow: string;
        successLight: string;
        successLighter: string;
        success: string;
        successDarker: string;
        successDark: string;
        successDarkest: string;
        successBoxShadow: string;
        dangerLight: string;
        dangerLighter: string;
        danger: string;
        dangerDarker: string;
        dangerDark: string;
        dangerDarkest: string;
        dangerBoxShadow: string;
        warningLight: string;
        warningLighter: string;
        warning: string;
        warningDarker: string;
        warningDark: string;
        warningDarkest: string;
        warningBoxShadow: string;
        infoLight: string;
        infoLighter: string;
        info: string;
        infoDarker: string;
        infoDark: string;
        infoDarkest: string;
        infoBoxShadow: string;
        lightLight: string;
        lightLighter: string;
        light: string;
        lightDarker: string;
        lightDark: string;
        lightDarkest: string;
        lightBoxShadow: string;
        darkLight: string;
        darkLighter: string;
        dark: string;
        darkDarker: string;
        darkDark: string;
        darkDarkest: string;
        darkBoxShadow: string;
        darkerLight: string;
        darkerLighter: string;
        darker: string;
        darkerDarker: string;
        darkerDark: string;
        darkerBoxShadow: string;
        white: string;
        whiteDarker: string;
        whiteDark: string;
        transparent: string;
        white90Alpha: string;
        white75Alpha: string;
        white50Alpha: string;
        white25Alpha: string;
        white10Alpha: string;
        dark90Alpha: string;
        dark75Alpha: string;
        dark50Alpha: string;
        dark25Alpha: string;
        dark10Alpha: string;
        white90Transparent: string;
        whiteHalfTransparent: string;
        whiteQuarterTransparent: string;
        whiteTenthTransparent: string;
        dark90Transparent: string;
        darkHalfTransparent: string;
        darkQuarterTransparent: string;
        darkTenthTransparent: string;
        // Default
        weakBorder: string;
        weakBackground: string;
      };
      button: {
        colors: {
          // functional values
          primary: {
            color: (get: string) => string;
            colorOutline: (get: string) => string;
            colorOutlineHover: (get: string) => string;
            backgroundColor: (get: string) => string;
            backgroundColorDisabled: (get: string) => string;
            backgroundColorHoverFocus: (get: string) => string;
            backgroundColorActive: (get: string) => string;
            borderColor: (get: string) => string;
            borderColorDisabled: (get: string) => string;
            borderColorHoverFocus: (get: string) => string;
            borderColorActive: (get: string) => string;
            boxShadow: (get: string) => string;
          };
          secondary: {
            color: (get: string) => string;
            colorOutline: (get: string) => string;
            colorOutlineHover: (get: string) => string;
            backgroundColor: (get: string) => string;
            backgroundColorDisabled: (get: string) => string;
            backgroundColorHoverFocus: (get: string) => string;
            backgroundColorActive: (get: string) => string;
            borderColor: (get: string) => string;
            borderColorDisabled: (get: string) => string;
            borderColorHoverFocus: (get: string) => string;
            borderColorActive: (get: string) => string;
            boxShadow: (get: string) => string;
          };
          success: {
            color: (get: string) => string;
            colorOutline: (get: string) => string;
            colorOutlineHover: (get: string) => string;
            backgroundColor: (get: string) => string;
            backgroundColorDisabled: (get: string) => string;
            backgroundColorHoverFocus: (get: string) => string;
            backgroundColorActive: (get: string) => string;
            borderColor: (get: string) => string;
            borderColorDisabled: (get: string) => string; // Default
            borderColorHoverFocus: (get: string) => string;
            borderColorActive: (get: string) => string;
            boxShadow: (get: string) => string;
          };
          danger: {
            color: (get: string) => string;
            colorOutline: (get: string) => string;
            colorOutlineHover: (get: string) => string;
            backgroundColor: (get: string) => string;
            backgroundColorDisabled: (get: string) => string;
            backgroundColorHoverFocus: (get: string) => string;
            backgroundColorActive: (get: string) => string;
            borderColor: (get: string) => string;
            borderColorDisabled: (get: string) => string;
            borderColorHoverFocus: (get: string) => string;
            borderColorActive: (get: string) => string;
            boxShadow: (get: string) => string;
          };
          warning: {
            color: (get: string) => string;
            colorOutline: (get: string) => string;
            colorOutlineHover: (get: string) => string;
            backgroundColor: (get: string) => string;
            backgroundColorDisabled: (get: string) => string;
            backgroundColorHoverFocus: (get: string) => string;
            backgroundColorActive: (get: string) => string;
            borderColor: (get: string) => string;
            borderColorDisabled: (get: string) => string;
            borderColorHoverFocus: (get: string) => string;
            borderColorActive: (get: string) => string;
            boxShadow: (get: string) => string;
          };
          info: {
            color: (get: string) => string;
            colorOutline: (get: string) => string;
            colorOutlineHover: (get: string) => string;
            backgroundColor: (get: string) => string;
            backgroundColorDisabled: (get: string) => string;
            backgroundColorHoverFocus: (get: string) => string;
            backgroundColorActive: (get: string) => string;
            borderColor: (get: string) => string;
            borderColorDisabled: (get: string) => string;
            borderColorHoverFocus: (get: string) => string;
            borderColorActive: (get: string) => string;
            boxShadow: (get: string) => string;
          };
          light: {
            color: (get: string) => string;
            colorOutline: (get: string) => string;
            colorOutlineHover: (get: string) => string;
            backgroundColor: (get: string) => string;
            backgroundColorDisabled: (get: string) => string;
            backgroundColorHoverFocus: (get: string) => string;
            backgroundColorActive: (get: string) => string;
            borderColor: (get: string) => string;
            borderColorDisabled: (get: string) => string;
            borderColorHoverFocus: (get: string) => string;
            borderColorActive: (get: string) => string;
            boxShadow: (get: string) => string;
            toggle: {
              color: (get: string) => string;
              borderColor: (get: string) => string;
              colorHoverFous: (get: string) => string;
              borderColorHoverFous: (get: string) => string;
            };
          };
          dark: {
            color: (get: string) => string;
            colorOutline: (get: string) => string;
            colorOutlineHover: (get: string) => string;
            backgroundColor: (get: string) => string;
            backgroundColorDisabled: (get: string) => string;
            backgroundColorHoverFocus: (get: string) => string;
            backgroundColorActive: (get: string) => string;
            borderColor: (get: string) => string;
            borderColorDisabled: (get: string) => string;
            borderColorHoverFocus: (get: string) => string;
            borderColorActive: (get: string) => string;
            boxShadow: (get: string) => string;
            toggle: {
              color: (get: string) => string;
              borderColor: (get: string) => string;
              colorHoverFous: (get: string) => string;
              borderColorHoverFous: (get: string) => string;
            };
          };
          default: (get: string) => string;
        };
        margin: {blockTop: string; dropDownToggleLeft: string};
        padding: {
          sm: string;
          lg: string;
          default: string;
          splitSmRight: string;
          splitSmLeft: string;
          splitLgRight: string;
          splitLgLeft: string;
          splitDefaultRight: string;
          splitDefaultLeft: string;
        };
        fontSize: (get: string) => string;
        border: (get: string) => string;
        borderRadius: (get: string) => string;
      };
      buttonGroup: {
        padding: (get: string) => string;
        fontSize: (get: string) => string;
      };
      formControl: {
        colors: {
          default: {
            color: (get: string) => string;
            background: (get: string) => string;
            border: (get: string) => string;
            borderFocus: (get: string) => string;
            boxShadowFocus: (get: string) => string;
            placeholder: (get: string) => string;
            backgroundColorDisabledReadonly: (get: string) => string;
            borderValid: (get: string) => string;
            formControlBoxShadowValid: (get: string) => string;
            borderInvalid: (get: string) => string;
            formControlBoxShadowInvalid: (get: string) => string;
          };
        };
        borderRadius: (get: string) => string;
        border: (get: string) => string;
        boxShadow: {default: string};
        padding: {
          smRight: string;
          smLeft: string;
          lgRight: string;
          lgLeft: string;
          smPadding: string;
          lgPadding: string;
          defaultPadding: string;
        };
        fontSize: {sm: string; lg: string; default: string};
        height: {select: string; selectLg: string; selectSm: string};
      };
      globals: {
        borderRadius: {
          noRadius: string;
          pill: string;
          sm: string;
          lg: string;
          default: string;
        };
        fontSize: {sm: string; lg: string; default: string; toggle: string};
        padding: {button: {sm: string; lg: string; default: string}};
        border: {default: string; bottomTop: string};
      };
    },
    ...path: (string | number)[]
  ) => {
    let value: StyledProps<any> = initialValue;

    for (let i = 0; value !== undefined && i < path.length; i += 1) {
      let tempValue = value[path[i]];

      while (typeof tempValue === 'function') {
        tempValue = tempValue(getterFunction);
      }

      value = tempValue;
    }

    return value;
  };

  const value = receiveValueSafe(theme, ...propertyPath);

  // Use default theme if property is not found in current theme
  if (value === undefined) {
    return receiveValueSafe(defaultTheme as StyledProps<any>, ...propertyPath);
  }

  return value;
};

// Helper for creating basic getter function for acessor's config properies
export const makeGetter =
  (property: string) =>
  (props: {theme: any}, accessor: any, ...path: any) =>
    getConfigProperty(props.theme, accessor, property, ...path);

export const getBoxShadow = makeGetter('boxShadow');
export const getMargin = makeGetter('margin');
export const getPadding = makeGetter('padding');
export const getBorder = makeGetter('border');
export const getBorderRadius = makeGetter('borderRadius');
export const getFontWeight = makeGetter('fontWeight');
export const getFontSize = makeGetter('fontSize');
export const getFontFamily = makeGetter('fontFamily');
export const getWidth = makeGetter('width');
export const getHeight = makeGetter('height');

export const getConcreteBreakpointSize = (
  props: StyledProps<any>,
  size: string,
) => getConfigProperty(props.theme, 'screenSize', size);

export const getBreakpointSize = (props: ButtonProps & StyledProps<any>) => {
  if (props.sm || props.expandSm) {
    return getConcreteBreakpointSize(props.theme, 'sm');
  } else if (props.md || props.expandMd) {
    return getConcreteBreakpointSize(props.theme, 'md');
  } else if (props.lg || props.expandLg) {
    return getConcreteBreakpointSize(props.theme, 'lg');
  } else if (props.xl || props.expandXl) {
    return getConcreteBreakpointSize(props.theme, 'xl');
  }

  return '';
};

export const getColor = (
  props: ButtonProps & StyledProps<any>,
  accessor: string,
  ...path: string[]
) => {
  const availableColors = Object.keys(defaultTheme.colorScheme);

  for (let i = 0; i < availableColors.length; i += 1) {
    const color = availableColors[i];

    if (props[color]) {
      return getConfigProperty(props.theme, accessor, 'colors', color, ...path);
    }
  }

  // Default
  return getConfigProperty(props.theme, accessor, 'colors', 'default', ...path);
};
