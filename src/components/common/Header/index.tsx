import type {HTMLAttributes} from 'astro/types';
import {
  useRef,
  type FC,
  useEffect,
  useState,
  createContext,
  type StateUpdater,
  useContext,
  useLayoutEffect,
} from 'preact/compat';
import {useElementScroll} from '../../../hooks/preact/useElementScroll';
import {cn} from '../../../utils/helpers';
import css from './style.module.css';
import HideBtn from './HideBtn';
import {useElementHide} from '../../../hooks/preact/useElementHide';
import {
  revTop as StoreRevTop,
  height as StoreHeight,
  hide as StoreHide,
} from '../../../store/SiteHeaderStore';

interface Props extends HTMLAttributes<'header'> {
  isFixed?: boolean;
}

interface IHeaderContext {
  hide: boolean;
  setHide: StateUpdater<boolean>;
}

const HeaderContextInit: IHeaderContext = {
  hide: false,
  setHide: () => {},
};

export const HeaderContext = createContext(HeaderContextInit);

const Header: FC<Props> = ({children, class: className, isFixed = false}) => {
  const root = useRef<HTMLElement>(null);
  const elemHeight = root.current?.offsetHeight ?? 0;

  const [hide, setHide] = useState<boolean>(false);

  const {top, onTop} = useElementScroll({elemHeight});

  const {top: hideTop, reverseTop: hideRevTop} = useElementHide({
    elemHeight,
    hide,
  });

  useEffect(() => {
    StoreRevTop.set(hideRevTop);
  }, [hideRevTop]);

  useEffect(() => {
    StoreHeight.set(elemHeight);
  }, [elemHeight]);

  useEffect(() => {
    StoreHide.set(hide);
  }, [hide]);

  return (
    <HeaderContext.Provider value={{...HeaderContextInit, hide, setHide}}>
      <header
        style={`--top: ${top}px; --hide-top: ${hideTop}px`}
        ref={root}
        class={cn(
          'root',
          css['root'],
          !onTop && 'scroll',
          isFixed && 'fixed',
          hide && 'hide',
          className
        )}
        data-target="site-header"
      >
        {children}
        <HideBtn />
      </header>
    </HeaderContext.Provider>
  );
};

export default Header;
