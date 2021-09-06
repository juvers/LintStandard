import {InterpolationFunction, SimpleInterpolation} from 'styled-components';
import recastStyles from './recastStyles';
import {ComponentProps, StylerConfig, StylerProp} from './types';

/**
 * Returns a function that evaluates a stylerConfig object against a component's props.
 * This function will return a string of CSS styles based on those inputs.
 * Specificity rules will happen in a waterfall
 * Im using _sx to activate the style usage which is also passed as a default params. This can be changed.
 * @export
 * @param {StylerConfig} stylerConfig
 * @param {string} [stylerPropName="_sx"]
 * @returns
 */
export default function styleRecastProvider(
  stylerConfig: StylerConfig,
  stylerPropName = '_sx',
): InterpolationFunction<ComponentProps> {
  return (
    props: ComponentProps & {
      size: string;
      [stylerPropName: string]: StylerProp<StylerConfig>;
    },
  ): SimpleInterpolation => {
    const styles = props[stylerPropName];

    return recastStyles(styles, stylerConfig, props);
  };
}
