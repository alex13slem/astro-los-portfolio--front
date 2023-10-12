import {type FunctionalComponent, type ComponentProps} from 'preact';
import type {HTMLAttributes} from 'preact/compat';
import {cn} from '../../utils/helpers.ts';
import NavLink from '../NavLink.tsx';

interface Props
  extends ComponentProps<FunctionalComponent>,
    HTMLAttributes<HTMLDivElement> {}

const Navigation: FunctionalComponent<Props> = ({class: className}) => {
  return (
    <nav className={cn('root', className)} data-target="site-navigation">
      <NavLink href="/#about">обо мне</NavLink>
      <NavLink href="/#experience">опыт</NavLink>
      <NavLink href="/#work">работы</NavLink>
      <NavLink href="/#contact">контакты</NavLink>
    </nav>
  );
};

export default Navigation;
