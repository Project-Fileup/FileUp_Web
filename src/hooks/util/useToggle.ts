import { useState, useCallback, Dispatch, SetStateAction } from 'react';

type UseToggle = readonly [
  boolean,
  () => void,
  Dispatch<SetStateAction<boolean>>,
];

const useToggle = (initialValue: boolean | (() => boolean)): UseToggle => {
  const [isToggle, setIsToggle] = useState<boolean>(initialValue);

  const handleIsToggle = useCallback((): void => {
    setIsToggle((prev) => !prev);
  }, []);

  return [
    isToggle,
    handleIsToggle,
    setIsToggle,
  ];
}

export default useToggle;