import {ReactElement} from 'react';
import {HeroBgComponent} from './variants';
/** You can create the type and include it in the Record generics */

export function HeroBg({
  image,
  children,
}: Record<
  string,
  string | number | ReactElement | ReactElement[]
>): JSX.Element {
  return <HeroBgComponent bg={image}>{children}</HeroBgComponent>;
}
