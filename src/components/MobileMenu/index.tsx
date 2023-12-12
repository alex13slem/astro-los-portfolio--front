import css from './style.module.scss';
import { useStore } from '@nanostores/react';
import { isOpen } from '../../store/mobileMenu';
import { cn } from '../../utils/helpers';
import { CSSTransition } from 'react-transition-group';
import {
  useRef,
  type ComponentProps,
  type FC,
  type HTMLAttributes,
} from 'react';

interface Props extends ComponentProps<FC>, HTMLAttributes<HTMLDivElement> {}

const MobileMenu: FC<Props> = ({}) => {
  const $isOpen = useStore(isOpen);
  const nodeRef = useRef(null);

  return (
    <CSSTransition in={$isOpen} nodeRef={nodeRef} timeout={500} unmountOnExit>
      <div ref={nodeRef} className={cn(css.root, $isOpen && css.open)}>
        <div className={css.inner}>asd</div>
      </div>
    </CSSTransition>
  );
};

export default MobileMenu;
