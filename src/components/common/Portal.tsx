import {createWrapperAndAppendToBody} from '../../utils/helpers';
import type {VNode} from 'preact';
import {createPortal, useLayoutEffect, useState} from 'preact/compat';

interface Props {
  children?: VNode<{}>;
  wrapperId?: string;
}

const Portal = ({children, wrapperId = 'portal-wrapper'}: Props) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement>();

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;

    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
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
