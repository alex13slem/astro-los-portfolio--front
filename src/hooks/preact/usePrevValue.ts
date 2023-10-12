import {useEffect, useState} from 'preact/hooks';

export const usePrevValue = <T extends number>(currentValue: T) => {
  const [prevValue, setPrevValue] = useState(currentValue);

  useEffect(() => {
    setPrevValue(currentValue);
  }, [currentValue]);

  return prevValue;
};
