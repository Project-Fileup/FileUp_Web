import { useCallback, useState } from 'react';

type UseCounter = readonly [number, () => void, () => void];

const useCounter = (initialValue: number): UseCounter => {
  const [counter, setCounter] = useState<number>(initialValue);

  const handlePrev = useCallback((): void => {
    setCounter((prev) => prev - 1);
  }, []);

  const handleNext = useCallback((): void => {
    setCounter((prev) => prev + 1);
  }, []);

  return [
    counter,
    handlePrev,
    handleNext,
  ];
}

export default useCounter;