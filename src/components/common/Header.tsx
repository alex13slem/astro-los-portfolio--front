import { cn } from '../../utils/helpers';
import { useStore } from '@nanostores/react';
import { isHide, onTop as onTopStore, currentHeight } from '../../store/header';
import { isOpen } from '../../store/mobileMenu';
import {
  useEffect,
  useRef,
  useState,
  type FC,
  type HTMLAttributes,
} from 'react';
import { useElementScroll } from '../../hooks/react/useElementScroll';

interface Props extends HTMLAttributes<HTMLDivElement> {
  isFixed?: boolean;
}

const Header: FC<Props> = ({
  children,
  className,
  style,
  isFixed = false,
  ...props
}) => {
  const root = useRef<HTMLDivElement>(null);
  const elemHeight = root.current?.offsetHeight || 0;
  const { top, reverseTop, onTop } = useElementScroll({ elemHeight });
  const [handleTop, setHandleTop] = useState<number>(top);
  const [autoTop, setAutoTop] = useState<number>(top);

  const $menuIsOpen = useStore(isOpen);
  const $isHide = useStore(isHide);

  useEffect(() => {
    currentHeight.set(reverseTop);
    setAutoTop(top);
    onTopStore.set(onTop);
  }, [reverseTop, top, onTop]);

  useEffect(() => {
    if ($isHide) {
      currentHeight.set(0);
      setHandleTop(-elemHeight);
    } else {
      currentHeight.set(elemHeight);
      setHandleTop(0);
    }
  }, [$isHide, elemHeight, top]);

  return (
    <header
      style={{
        '--handle-top': `${handleTop}px`,
        '--auto-top': `${autoTop}px`,
      }}
      ref={root}
      className={cn(
        className,
        onTop && 'on-top',
        $menuIsOpen && 'menu-is-open',
        isFixed && 'fixed'
      )}
      {...props}
    >
      {children}
    </header>
  );
};

export default Header;
