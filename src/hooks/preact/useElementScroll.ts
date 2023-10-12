import {useEffect, useState} from 'preact/hooks';
import {useScrollY} from './useScrollY';

interface Props {
  elemHeight: number;
}

export const useElementScroll = ({elemHeight}: Props) => {
  const {step, currentY} = useScrollY();

  const onTop = !currentY;

  const [top, setTop] = useState<number>(0);
  const [reverseTop, setReverseTop] = useState<number>(0);

  const topStep = top - step;

  useEffect(() => {
    if (topStep < -elemHeight) {
      setTop(-elemHeight);
      setReverseTop(0);
      return;
    }
    if (topStep > 0) {
      setTop(0);
      setReverseTop(elemHeight);
      return;
    }
    if (topStep >= -elemHeight && topStep <= 0) {
      setTop((p) => p - step);
      setReverseTop(top + elemHeight);
      return;
    }
  }, [topStep, elemHeight]);

  return {top, reverseTop, onTop};
};
