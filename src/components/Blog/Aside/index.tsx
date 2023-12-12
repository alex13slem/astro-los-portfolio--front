import Navigation from '../Navigation';
import type { IBlogProps } from '../../../layouts/Blog/IBlogProps';
import { useStore } from '@nanostores/react';

import { cn } from '../../../utils/helpers';
import css from './style.module.scss';
import { currentHeight } from '../../../store/header';
import type { ComponentProps, FC, HTMLAttributes } from 'react';

interface Props
  extends ComponentProps<FC>,
    HTMLAttributes<HTMLDivElement>,
    Pick<IBlogProps, 'headings'> {}

const Aside: FC<Props> = ({ headings }) => {
  const $headerHeight = useStore(currentHeight);

  return (
    <aside
      className={cn(css.root, css.transition)}
      style={{ '--top': `${$headerHeight}px` }}
    >
      <Navigation headings={headings} />
    </aside>
  );
};

export default Aside;
