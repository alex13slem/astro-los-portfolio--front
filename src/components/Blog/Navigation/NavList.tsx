import {type FunctionalComponent, type ComponentProps} from 'preact';
import type {HTMLAttributes} from 'preact/compat';
import NavLink from './NavLink';
import type {IBlogProps} from '../../../layouts/Blog/IBlogProps';

interface Props
  extends ComponentProps<FunctionalComponent>,
    HTMLAttributes<HTMLDivElement>,
    Pick<IBlogProps, 'headings'> {}

const NavList: FunctionalComponent<Props> = ({headings}) => {
  const headingsH2 = headings?.filter(({depth}) => depth === 2);
  return (
    <nav class="list" data-target="blog-navigation">
      {headingsH2?.map((h) => (
        <NavLink key={h.slug} data={h} />
      ))}
    </nav>
  );
};

export default NavList;
