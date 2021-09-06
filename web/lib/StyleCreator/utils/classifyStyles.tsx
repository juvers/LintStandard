import {StylerKeys, StylerNames} from './types';

/**
 * Allow styles props to be also be represented as an array.
 * @export
 * @param {StylerKeys} stylerKeys
 * @returns {StylerNames}
 */
export default function classifyStyles(stylerKeys: StylerKeys): StylerNames {
  return (Array.isArray(stylerKeys) ? stylerKeys : [stylerKeys]).filter(
    (i): boolean => typeof i === 'string' && !!i,
  );
}
