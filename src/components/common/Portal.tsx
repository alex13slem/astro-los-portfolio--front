import { useLayoutEffect, useState, type ReactNode } from 'react';
import { createWrapperAndAppendToBody } from '../../utils/helpers';
import { createPortal } from 'react-dom';

interface Props {
  children?: ReactNode | false;
  wrapperId?: string;
  class?: string;
}

const Portal = ({
  children,
  wrapperId = 'portal-wrapper',
  class: className = '',
}: Props) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement>();

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;

    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId, className);
    }

    setWrapperElement(element);

    return () => {
      if (systemCreated && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (!wrapperElement || !children) return null;

  return createPortal(children, wrapperElement);
};

export default Portal;
