import type { IBlogProps } from '../../../layouts/Blog/IBlogProps';
import NavLink from '../NavLink';

import css from './style.module.scss';
import type { ComponentProps, FC, HTMLAttributes } from 'react';

interface Props
  extends ComponentProps<FC>,
    HTMLAttributes<HTMLDivElement>,
    Pick<IBlogProps, 'headings'> {}

const NavList: FC<Props> = ({ headings }) => {
  const headingsH2 = headings?.filter(({ depth }) => depth === 2);
  return (
    <nav className={css.root}>
      {headingsH2?.map((h) => (
        <NavLink key={h.slug} data={h} />
      ))}
    </nav>
  );
};

export default NavList;
