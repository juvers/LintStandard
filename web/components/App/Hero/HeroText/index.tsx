import {ReactElement} from 'react';
import {HeroTextComponent} from './variants';
/** You can create the type and include it in the Record generics */

export function HeroText({
  color,
  children,
}: Record<
  string,
  'skincolor' | 'lightgreen' | 'bloodred' | ReactElement | ReactElement[]
>): JSX.Element {
  return <HeroTextComponent _sx={color}>{children}</HeroTextComponent>;
}
