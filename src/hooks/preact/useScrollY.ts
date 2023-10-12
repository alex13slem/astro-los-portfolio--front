import {useEffect, useState} from 'preact/hooks';
import {usePrevValue} from './usePrevValue';

export const useScrollY = () => {
  const [currentY, setCurrentY] = useState(window.scrollY);
  const prevY = usePrevValue(currentY);

  const step = currentY - (prevY || currentY);

  const handlerScroll = () => setCurrentY(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', handlerScroll);
    return () => window.removeEventListener('scroll', handlerScroll);
  }, []);

  return {currentY, prevY, step};
};
