import { ChangeEvent, Dispatch, SetStateAction, useCallback, useState } from 'react';

type InputElements = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

type UseObjectInput<T> = readonly [
  T,
  (e: ChangeEvent<InputElements>) => void,
  Dispatch<SetStateAction<T>>,
  () => void,
];

const useObjectInput = <T extends {}>(initialValue: T): UseObjectInput<T> => {
  const [value, setValue] = useState<T>(initialValue);

  const onChange = useCallback((e: ChangeEvent<InputElements>): void => {
    const { name, value } = e.target;

    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const onReset = useCallback((): void => {
    setValue(initialValue);
  }, [initialValue]);

  return [
    value,
    onChange,
    setValue,
    onReset,
  ];
}

export default useObjectInput;