import {SimpleInterpolation, StyledProps} from 'styled-components';

export type StylerName = string;

export type StylerNames = StylerName[];

/**
 * The single style key or array of style keys
 */
export type StylerKeys = StylerNames | StylerName;

/**
 * This prop will formulate the type safety for style components.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export type StylerProp<T extends object = {}> = keyof T | (keyof T)[];

export interface StylerObjectValue {
  styles: SimpleInterpolation;
}

export type StylerConfigValue = (
  // eslint-disable-next-line no-unused-vars
  props: ComponentProps,
) => SimpleInterpolation | StylerObjectValue;

/**
 * An object declaring styles for use within a component.
 */
export interface StylerConfig {
  [key: string]: StylerConfigValue;
}

/**
 * The component's props. Use this to silence typescript when creating a styled component
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ComponentProps = StyledProps<any>;
