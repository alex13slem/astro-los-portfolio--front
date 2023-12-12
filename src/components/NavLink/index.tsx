import type { ComponentProps, FC, HTMLAttributes } from 'react';
import { cn } from '../../utils/helpers';
import css from './style.module.scss';
interface Props extends ComponentProps<FC>, HTMLAttributes<HTMLAnchorElement> {
  active: boolean;
}

const NavLink: FC<Props> = ({ className, active, children, ...props }) => {
  return (
    <a className={cn(className, css.root, active && css.active)} {...props}>
      {children}
    </a>
  );
};

export default NavLink;
