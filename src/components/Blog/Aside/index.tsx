import {type FunctionalComponent, type ComponentProps} from 'preact';
import type {HTMLAttributes} from 'preact/compat';
import Navigation from '../Navigation';
import type {IBlogProps} from '../../../layouts/Blog/IBlogProps';
import {useStore} from '@nanostores/preact';
import {
  revTop as StoreHeaderRevTop,
  height as StoreHeaderHeight,
  hide as StoreHeaderHide,
} from '../../../store/SiteHeaderStore';
import {cn} from '../../../utils/helpers';

interface Props
  extends ComponentProps<FunctionalComponent>,
    HTMLAttributes<HTMLDivElement>,
    Pick<IBlogProps, 'headings'> {}

const Aside: FunctionalComponent<Props> = ({headings}) => {
  const headerRevTop = useStore(StoreHeaderRevTop);
  const headerHeight = useStore(StoreHeaderHeight);
  const headerIsHide = useStore(StoreHeaderHide);
  return (
    <aside
      className={cn('root', headerIsHide && 'full-screen')}
      data-target="blog-aside"
      style={`--top: ${headerRevTop}px; --header-height: ${headerHeight}px`}
    >
      <Navigation headings={headings} />
    </aside>
  );
};

export default Aside;
