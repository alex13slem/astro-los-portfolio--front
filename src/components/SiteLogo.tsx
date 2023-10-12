import {cn} from '../utils/helpers';

import {type FunctionalComponent, type ComponentProps} from 'preact';
import type {HTMLAttributes} from 'preact/compat';

interface Props
  extends ComponentProps<FunctionalComponent>,
    HTMLAttributes<HTMLAnchorElement> {}

const SiteLogo: FunctionalComponent<Props> = ({class: className, ...props}) => {
  return (
    <a className={cn('site-logo', className)} href={'/'} {...props}>
      @13
    </a>
  );
};

export default SiteLogo;
