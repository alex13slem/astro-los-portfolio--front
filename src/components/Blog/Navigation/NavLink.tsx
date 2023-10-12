import {type FunctionalComponent, type ComponentProps} from 'preact';
import {useRef, type HTMLAttributes} from 'preact/compat';

interface Props
  extends ComponentProps<FunctionalComponent>,
    HTMLAttributes<HTMLDivElement> {
  data: any;
}

const NavLink: FunctionalComponent<Props> = ({data}) => {
  return (
    <a href={'#' + data.slug} class="link" data-target="blog-navigation">
      {data.text}
    </a>
  );
};

export default NavLink;
