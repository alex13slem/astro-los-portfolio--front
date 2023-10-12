import {MdMenu, MdOutlineClose} from 'react-icons/md';
import {isOpen as isOpenStore} from '../store/SiteNavigationStore';
import {type FunctionalComponent, type ComponentProps} from 'preact';
import type {HTMLAttributes} from 'preact/compat';
import {useStore} from '@nanostores/preact';

interface Props
  extends ComponentProps<FunctionalComponent>,
    HTMLAttributes<HTMLDivElement> {}

const NavToggler: FunctionalComponent<Props> = ({}) => {
  const isOpen = useStore(isOpenStore);
  const toggler = () => isOpenStore.set(!isOpenStore.get());
  return (
    <button class="toggler" data-target="site-navigation" onClick={toggler}>
      {isOpen ? <MdOutlineClose /> : <MdMenu class="menu" />}
    </button>
  );
};

export default NavToggler;
