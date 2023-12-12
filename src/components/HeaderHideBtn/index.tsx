import { MdArrowDropUp } from 'react-icons/md';
import { cn } from '../../utils/helpers';
import css from './style.module.scss';
import { isHide, onTop } from '../../store/header';
import { useStore } from '@nanostores/react';
import {
  useEffect,
  type ComponentProps,
  type FC,
  type HTMLAttributes,
} from 'react';

interface Props extends ComponentProps<FC>, HTMLAttributes<HTMLDivElement> {}

const HideBtn: FC<Props> = () => {
  const $isHide = useStore(isHide);
  const $onTop = useStore(onTop);

  return (
    <button
      className={cn(css.root, $isHide && css['hide'], $onTop && css['on-top'])}
      onClick={() => isHide.set(!$isHide)}
    >
      <MdArrowDropUp />
    </button>
  );
};

export default HideBtn;
