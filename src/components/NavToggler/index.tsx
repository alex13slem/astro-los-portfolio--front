import { MdMenu, MdOutlineClose } from 'react-icons/md';

import css from './style.module.scss';
import { cn } from '../../utils/helpers';
import { isOpen } from '../../store/mobileMenu';
import { useStore } from '@nanostores/react';
import type { ComponentProps, FC, HTMLAttributes } from 'react';

interface Props extends ComponentProps<FC>, HTMLAttributes<HTMLDivElement> {}

const NavToggler: FC<Props> = ({ className }) => {
  const $isOpen = useStore(isOpen);
  const toggler = () => isOpen.set(!$isOpen);
  return (
    <button
      className={cn(css.root, $isOpen && css['is-open'], className)}
      onClick={toggler}
    >
      {$isOpen ? (
        <MdOutlineClose class={css.SVGclose} />
      ) : (
        <MdMenu class={css.SVGmenu} />
      )}
    </button>
  );
};

export default NavToggler;
