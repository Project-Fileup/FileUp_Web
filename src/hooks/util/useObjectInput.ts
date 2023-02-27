import { ChangeEvent, Dispatch, SetStateAction, useState, useCallback, ChangeEventHandler } from 'react';

type InputElements = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

type UseObjectInput<T> = readonly [
  T,
  ChangeEventHandler<InputElements>,
  Dispatch<SetStateAction<T>>,
  () => void,
];

const useObjectInput = <T extends Record<string, any> | null>(
  initialValue: T,
): UseObjectInput<T> => {
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