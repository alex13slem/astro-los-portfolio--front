import type { ComponentProps, FC, HTMLAttributes } from 'react';
import { cn } from '../../utils/helpers';
import css from './style.module.scss';
import { locationHash } from '../../store/location';
import { useStore } from '@nanostores/react';

interface Props extends ComponentProps<FC>, HTMLAttributes<HTMLAnchorElement> {
  to: string;
}

const NavLink: FC<Props> = ({ children, className, to, ...props }) => {
  const $locationHash = useStore(locationHash);

  return (
    <a
      className={cn(
        css['nav-link'],
        $locationHash.includes(to.split('#')[1]) && css['active'],
        className
      )}
      href={to}
      {...props}
    >
      {children}
    </a>
  );
};

export default NavLink;
