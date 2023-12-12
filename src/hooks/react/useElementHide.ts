import { useEffect, useState } from 'react';

interface Props {
  elemHeight: number;
  isHide: boolean;
}

export const useElementHide = ({ elemHeight, isHide = false }: Props) => {
  const [top, setTop] = useState<number>(0);
  const [reverseTop, setReverseTop] = useState<number>(0);

  useEffect(() => {
    if (isHide) {
      setTop(-elemHeight);
      setReverseTop(0);
      return;
    } else {
      setTop(0);
      setReverseTop(elemHeight);
      return;
    }
  }, [elemHeight, isHide]);

  return { top, reverseTop };
};
