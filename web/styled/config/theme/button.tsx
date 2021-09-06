import {Theme, ThemedProps} from '../../config';
type ButtonOwnProps =
  | 'split'
  | 'lg'
  | 'sm'
  | 'dropdownToggle'
  | 'block'
  | 'pill'
  | 'noRadius'
  | 'disabled'
  | 'outline'
  | 'active'
  | 'expandSm'
  | 'expandMd'
  | 'expandLg'
  | 'expandXl'
  | 'toggleCollapse'
  | 'vertical';

export type ButtonProps = ThemedProps<
  {
    [K in keyof Theme['button']['colors'] | keyof Theme['button']]: boolean;
  }
> &
  {[k in ButtonOwnProps]: boolean};
type GetterType = (a: string, b: string, c?: string) => string;
const button = {
  colors: {
    primary: {
      color: (get: GetterType) => get('colorScheme', 'white'),
      colorOutline: (get: GetterType) => get('colorScheme', 'primary'),
      colorOutlineHover: (get: GetterType) => get('colorScheme', 'white'),
      backgroundColor: (get: GetterType) => get('colorScheme', 'primary'),
      backgroundColorDisabled: (get: GetterType) => get('colorScheme', 'primary'),
      backgroundColorHoverFocus: (get: GetterType) =>
        get('colorScheme', 'primaryDarker'),
      backgroundColorActive: (get: GetterType) => get('colorScheme', 'primaryDark'),
      borderColor: (get: GetterType) => get('colorScheme', 'primary'),
      borderColorDisabled: (get: GetterType) => get('colorScheme', 'primary'),
      borderColorHoverFocus: (get: GetterType) => get('colorScheme', 'primaryDark'),
      borderColorActive: (get: GetterType) => get('colorScheme', 'primaryDark'),
      boxShadow: (get: GetterType) => get('colorScheme', 'primaryBoxShadow'),
    },
    secondary: {
      color: (get: GetterType) => get('colorScheme', 'white'),
      colorOutline: (get: GetterType) => get('colorScheme', 'secondary'),
      colorOutlineHover: (get: GetterType) => get('colorScheme', 'white'),
      backgroundColor: (get: GetterType) => get('colorScheme', 'secondary'),
      backgroundColorDisabled: (get: GetterType) => get('colorScheme', 'secondary'),
      backgroundColorHoverFocus: (get: GetterType) =>
        get('colorScheme', 'secondaryDarker'),
      backgroundColorActive: (get: GetterType) => get('colorScheme', 'secondary'),
      borderColor: (get: GetterType) => get('colorScheme', 'secondary'),
      borderColorDisabled: (get: GetterType) => get('colorScheme', 'secondary'),
      borderColorHoverFocus: (get: GetterType) => get('colorScheme', 'secondaryDark'),
      borderColorActive: (get: GetterType) => get('colorScheme', 'secondaryDark'),
      boxShadow: (get: GetterType) => get('colorScheme', 'secondaryBoxShadow'),
    },
    success: {
      color: (get: GetterType) => get('colorScheme', 'white'),
      colorOutline: (get: GetterType) => get('colorScheme', 'success'),
      colorOutlineHover: (get: GetterType) => get('colorScheme', 'white'),
      backgroundColor: (get: GetterType) => get('colorScheme', 'success'),
      backgroundColorDisabled: (get: GetterType) => get('colorScheme', 'success'),
      backgroundColorHoverFocus: (get: GetterType) =>
        get('colorScheme', 'successDarker'),
      backgroundColorActive: (get: GetterType) => get('colorScheme', 'successDark'),
      borderColor: (get: GetterType) => get('colorScheme', 'success'),
      borderColorDisabled: (get: GetterType) => get('colorScheme', 'success'),
      borderColorHoverFocus: (get: GetterType) => get('colorScheme', 'successDark'),
      borderColorActive: (get: GetterType) => get('colorScheme', 'successDark'),
      boxShadow: (get: GetterType) => get('colorScheme', 'successBoxShadow'),
    },
    danger: {
      color: (get: GetterType) => get('colorScheme', 'white'),
      colorOutline: (get: GetterType) => get('colorScheme', 'danger'),
      colorOutlineHover: (get: GetterType) => get('colorScheme', 'white'),
      backgroundColor: (get: GetterType) => get('colorScheme', 'danger'),
      backgroundColorDisabled: (get: GetterType) => get('colorScheme', 'danger'),
      backgroundColorHoverFocus: (get: GetterType) =>
        get('colorScheme', 'dangerDarker'),
      backgroundColorActive: (get: GetterType) => get('colorScheme', 'dangerDark'),
      borderColor: (get: GetterType) => get('colorScheme', 'danger'),
      borderColorDisabled: (get: GetterType) => get('colorScheme', 'danger'),
      borderColorHoverFocus: (get: GetterType) => get('colorScheme', 'dangerDark'),
      borderColorActive: (get: GetterType) => get('colorScheme', 'dangerDark'),
      boxShadow: (get: GetterType) => get('colorScheme', 'dangerBoxShadow'),
    },
    warning: {
      color: (get: GetterType) => get('colorScheme', 'darkerDarker'),
      colorOutline: (get: GetterType) => get('colorScheme', 'warning'),
      colorOutlineHover: (get: GetterType) => get('colorScheme', 'darkerDarker'),
      backgroundColor: (get: GetterType) => get('colorScheme', 'warning'),
      backgroundColorDisabled: (get: GetterType) => get('colorScheme', 'warning'),
      backgroundColorHoverFocus: (get: GetterType) =>
        get('colorScheme', 'warningDarker'),
      backgroundColorActive: (get: GetterType) => get('colorScheme', 'warningDark'),
      borderColor: (get: GetterType) => get('colorScheme', 'warning'),
      borderColorDisabled: (get: GetterType) => get('colorScheme', 'warning'),
      borderColorHoverFocus: (get: GetterType) => get('colorScheme', 'warningDark'),
      borderColorActive: (get: GetterType) => get('colorScheme', 'warningDark'),
      boxShadow: (get: GetterType) => get('colorScheme', 'warningBoxShadow'),
    },
    info: {
      color: (get: GetterType) => get('colorScheme', 'white'),
      colorOutline: (get: GetterType) => get('colorScheme', 'info'),
      colorOutlineHover: (get: GetterType) => get('colorScheme', 'white'),
      backgroundColor: (get: GetterType) => get('colorScheme', 'info'),
      backgroundColorDisabled: (get: GetterType) => get('colorScheme', 'info'),
      backgroundColorHoverFocus: (get: GetterType) =>
        get('colorScheme', 'infoDarker'),
      backgroundColorActive: (get: GetterType) => get('colorScheme', 'infoDark'),
      borderColor: (get: GetterType) => get('colorScheme', 'info'),
      borderColorDisabled: (get: GetterType) => get('colorScheme', 'info'),
      borderColorHoverFocus: (get: GetterType) => get('colorScheme', 'infoDark'),
      borderColorActive: (get: GetterType) => get('colorScheme', 'infoDark'),
      boxShadow: (get: GetterType) => get('colorScheme', 'infoBoxShadow'),
    },
    light: {
      color: (get: GetterType) => get('colorScheme', 'darkerDarker'),
      colorOutline: (get: GetterType) => get('colorScheme', 'light'),
      colorOutlineHover: (get: GetterType) => get('colorScheme', 'darkerDarker'),
      backgroundColor: (get: GetterType) => get('colorScheme', 'light'),
      backgroundColorDisabled: (get: GetterType) => get('colorScheme', 'light'),
      backgroundColorHoverFocus: (get: GetterType) =>
        get('colorScheme', 'lightDarker'),
      backgroundColorActive: (get: GetterType) => get('colorScheme', 'lightDark'),
      borderColor: (get: GetterType) => get('colorScheme', 'light'),
      borderColorDisabled: (get: GetterType) => get('colorScheme', 'light'),
      borderColorHoverFocus: (get: GetterType) => get('colorScheme', 'lightDark'),
      borderColorActive: (get: GetterType) => get('colorScheme', 'lightDark'),
      boxShadow: (get: GetterType) => get('colorScheme', 'lightBoxShadow'),
      toggle: {
        color: (get: GetterType) => get('colorScheme', 'dark50Alpha'),
        borderColor: (get: GetterType) => get('colorScheme', 'dark10Alpha'),
        colorHoverFous: (get: GetterType) => get('colorScheme', 'dark50Alpha'),
        borderColorHoverFous: (get: GetterType) => get('colorScheme', 'dark10Alpha'),
      },
    },
    dark: {
      color: (get: GetterType) => get('colorScheme', 'white'),
      colorOutline: (get: GetterType) => get('colorScheme', 'dark'),
      colorOutlineHover: (get: GetterType) => get('colorScheme', 'white'),
      backgroundColor: (get: GetterType) => get('colorScheme', 'dark'),
      backgroundColorDisabled: (get: GetterType) => get('colorScheme', 'dark'),
      backgroundColorHoverFocus: (get: GetterType) =>
        get('colorScheme', 'darkDarker'),
      backgroundColorActive: (get: GetterType) => get('colorScheme', 'darkDark'),
      borderColor: (get: GetterType) => get('colorScheme', 'dark'),
      borderColorDisabled: (get: GetterType) => get('colorScheme', 'dark'),
      borderColorHoverFocus: (get: GetterType) => get('colorScheme', 'darkDark'),
      borderColorActive: (get: GetterType) => get('colorScheme', 'darkDark'),
      boxShadow: (get: GetterType) => get('colorScheme', 'darkBoxShadow'),
      toggle: {
        color: (get: GetterType) => get('colorScheme', 'white50Alpha'),
        borderColor: (get: GetterType) => get('colorScheme', 'white10Alpha'),
        colorHoverFous: (get: GetterType) => get('colorScheme', 'white50Alpha'),
        borderColorHoverFous: (get: GetterType) => get('colorScheme', 'white10Alpha'),
      },
    },
    default: (get: GetterType) =>
      get('button', 'colors', 'secondary'),
  },
  margin: {
    blockTop: '0.5rem',
    dropDownToggleLeft: '0255rem',
  },
  padding: {
    sm: '0.25rem 0.5rem',
    lg: '0.5rem 1rem',
    default: '0.375rem 0.75rem',

    splitSmRight: '0.375rem',
    splitSmLeft: '0.375rem',
    splitLgRight: '0.75rem',
    splitLgLeft: '0.75rem',
    splitDefaultRight: '0.5625rem',
    splitDefaultLeft: '0.5625rem',
  },
  fontSize: (get: GetterType) => get('globals', 'fontSize'),
  border: (get: GetterType) => get('globals', 'border'),
  borderRadius: (get: GetterType) => get('globals', 'borderRadius'),
};

export {button};
