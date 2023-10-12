import {useEffect, useState} from 'preact/hooks';

interface Props {
  elemHeight: number;
  hide: boolean;
}

export const useElementHide = ({elemHeight, hide = false}: Props) => {
  const [top, setTop] = useState<number>(0);
  const [reverseTop, setReverseTop] = useState<number>(0);

  useEffect(() => {
    if (hide) {
      setTop(-elemHeight);
      setReverseTop(0);
      return;
    }
    if (!hide) {
      setTop(0);
      setReverseTop(elemHeight);
      return;
    }
  }, [elemHeight, hide]);

  return {top, reverseTop};
};
