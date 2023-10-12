import {type FunctionalComponent, type ComponentProps} from 'preact';
import {type HTMLAttributes} from 'preact/compat';

import NavList from './NavList';
import type {IBlogProps} from '../../../layouts/Blog/IBlogProps';

interface Props
  extends ComponentProps<FunctionalComponent>,
    HTMLAttributes<HTMLDivElement>,
    Pick<IBlogProps, 'headings'> {}

const Navigation: FunctionalComponent<Props> = ({headings}) => {
  return (
    <div class="root" data-target="blog-navigation">
      <h2>Содержание:</h2>
      <NavList headings={headings} />
      <NavList headings={headings} />
    </div>
  );
};

export default Navigation;
