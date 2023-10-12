import {type FunctionalComponent, type ComponentProps} from 'preact';
import {useContext, type HTMLAttributes} from 'preact/compat';
import {MdArrowDropUp} from 'react-icons/md';
import {HeaderContext} from '.';
import {cn} from '../../../utils/helpers';

interface Props
  extends ComponentProps<FunctionalComponent>,
    HTMLAttributes<HTMLDivElement> {}

const HideBtn: FunctionalComponent<Props> = () => {
  const {hide, setHide} = useContext(HeaderContext);
  return (
    <button
      data-target="site-header"
      class={cn('hide-btn', hide && 'hide')}
      onClick={() => setHide(!hide)}
    >
      <MdArrowDropUp />
    </button>
  );
};

export default HideBtn;
