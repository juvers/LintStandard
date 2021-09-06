import isFunction from 'lodash/isFunction';
import isObject from 'lodash/isObject';
import {SimpleInterpolation} from 'styled-components';

import classifyStyles from './classifyStyles';

import {
  ComponentProps,
  StylerKeys,
  StylerName,
  StylerObjectValue,
  StylerConfig,
} from './types';

/**
 * Evaluates if the first argument is of the StylerObjectValue type
 * @param {*} val
 * @returns {val is StylerObjectValue}
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isStylerObjectValue(val: any): val is StylerObjectValue {
  return isObject(val) && !!(val as StylerObjectValue).styles;
}

/**
 * Extracts and builds the required style string based on the provided values.
 * @export
 * @param {StylerKeys} [stylerKeys=[]]
 * @param {StylerConfig} [stylerConfig={}]
 * @param {ComponentProps} [componentProps]
 * @returns {SimpleInterpolation}
 */
export default function recastStyles(
  stylerKeys: StylerKeys = [],
  stylerConfig: StylerConfig = {},
  componentProps: ComponentProps,
): SimpleInterpolation {
  const stylesArr = classifyStyles(stylerKeys).reduce(
    (
      acc: SimpleInterpolation[],
      stylerName: StylerName,
    ): SimpleInterpolation[] => {
      const stylerConfigValue = stylerConfig[stylerName];

      if (isFunction(stylerConfigValue)) {
        const config = stylerConfigValue(componentProps);

        const styles = isStylerObjectValue(config) ? config.styles : config;

        return Array.isArray(styles)
          ? acc.concat((styles as SimpleInterpolation[]).join(''))
          : acc.concat(styles);
      }

      return acc;
    },
    [],
  );

  return stylesArr.join(' ');
}
