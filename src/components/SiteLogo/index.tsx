import type { ComponentProps, FC, HTMLAttributes } from 'react';
import { cn } from '../../utils/helpers';

import css from './style.module.css';

interface Props extends ComponentProps<FC>, HTMLAttributes<HTMLAnchorElement> {}

const SiteLogo: FC<Props> = ({ className, ...props }) => {
  return (
    <a className={cn(css.root, className)} href="/" {...props}>
      @13
    </a>
  );
};

export default SiteLogo;
