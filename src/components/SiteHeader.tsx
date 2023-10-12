import NavToggler from './NavToggler.tsx';
import Navigation from './common/Navigation.tsx';
import NavigationMobile from './NavigationMobile.tsx';
import SiteLogo from './SiteLogo.tsx';
import Header from './common/Header/index.tsx';
import {isOpen as isOpenStore} from '../store/SiteNavigationStore.ts';
import {useStore} from '@nanostores/preact';

import {type FunctionalComponent, type ComponentProps} from 'preact';
import type {HTMLAttributes} from 'preact/compat';

interface Props
  extends ComponentProps<FunctionalComponent>,
    HTMLAttributes<HTMLDivElement> {}

const SiteHeader: FunctionalComponent<Props> = ({}) => {
  const isOpen = useStore(isOpenStore);
  return (
    <Header isFixed={isOpen}>
      <div class="container">
        <SiteLogo />
        <Navigation />
        {isOpen && <NavigationMobile />}
        <NavToggler />
      </div>
    </Header>
  );
};

export default SiteHeader;
