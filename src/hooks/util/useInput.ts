import {
  useState,
  useCallback,
  Dispatch,
  SetStateAction,
  ChangeEvent,
} from 'react';

type InputElements = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

type UseInput<T> = readonly [T, (e: ChangeEvent<InputElements>) => void, Dispatch<SetStateAction<T>>];

const useInput = <T>(initialValue: T): UseInput<T> => {
  const [value, setValue] = useState<T>(initialValue);

  const onChange = useCallback((e: ChangeEvent<InputElements>): void => {
    setValue((e.target.value as unknown) as T);
  }, []);

  return [
    value,
    onChange,
    setValue,
  ];
}

export default useInput;