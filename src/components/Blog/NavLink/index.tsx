import type { ComponentProps, FC, HTMLAttributes } from 'react';
import css from './style.module.scss';

interface Props extends ComponentProps<FC>, HTMLAttributes<HTMLDivElement> {
  data: any;
}

const NavLink: FC<Props> = ({ data }) => {
  return (
    <a href={'#' + data.slug} className={css.root}>
      {data.text}
    </a>
  );
};

export default NavLink;
