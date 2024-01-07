import css from './style.module.scss';

import NavList from '../NavList';
import type { IBlogProps } from '../../../layouts/Blog/IBlogProps';
import type { ComponentProps, FC, HTMLAttributes } from 'react';

interface Props
  extends ComponentProps<FC>,
    HTMLAttributes<HTMLDivElement>,
    Pick<IBlogProps, 'headings'> {}

const Navigation: FC<Props> = ({ headings }) => {
  return (
    <div className={css.root}>
      <h2>Содержание:</h2>
      <NavList headings={headings} />
    </div>
  );
};

export default Navigation;
