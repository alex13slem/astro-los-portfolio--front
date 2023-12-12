import { useEffect, useState } from 'react';

export const usePrevValue = <T extends number>(currentValue: T) => {
  const [prevValue, setPrevValue] = useState(currentValue);

  useEffect(() => {
    setPrevValue(currentValue);
  }, [currentValue]);

  return prevValue;
};
