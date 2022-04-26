import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

const useOutSideClick = <T extends HTMLElement>(disableSVG: boolean = true) => {
  const elementRef = useRef<T>(null);

  const [isFocus, setIsFocus] = useState<boolean>(false);

  const handleOutSideClick = useCallback((e: MouseEvent) => {
    if (!elementRef.current || !elementRef.current.contains(e.target as Node)) {
      if (disableSVG && String(e.target).includes('SVG')) {
        return void setIsFocus(true);
      }

      return void setIsFocus(false);
    }

    setIsFocus(true);
  }, [disableSVG]);

  useEffect(() => {
    if (isFocus) {
      window.addEventListener('click', handleOutSideClick);

      return () => window.removeEventListener('click', handleOutSideClick);
    }
  }, [handleOutSideClick, isFocus]);

  return {
    elementRef,
    isFocus,
    setIsFocus,
  };
}

export default useOutSideClick;