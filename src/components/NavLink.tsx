import {type FunctionalComponent, type ComponentProps} from 'preact';
import type {HTMLAttributes} from 'preact/compat';
import {cn} from '../utils/helpers';

interface Props
  extends ComponentProps<FunctionalComponent>,
    HTMLAttributes<HTMLAnchorElement> {}

const NavLink: FunctionalComponent<Props> = ({
  class: className,
  children,
  ...props
}) => {
  return (
    <a
      className={cn('link', className)}
      data-target="site-navigation"
      {...props}
    >
      {children}
    </a>
  );
};

export default NavLink;
