import { DependencyList, useCallback, useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
const useDebouncedCallBack = <T extends Function>(
  callback: T,
  deps: DependencyList,
  timeOut: number,
) => {
  const debounceTime = useRef<null | NodeJS.Timeout>(null);
  // eslint-disable-next-line @typescript-eslint/ban-types
  const cb = useCallback((...args: T['arguments']) => {
    if (debounceTime.current) {
      clearTimeout(debounceTime.current);
      debounceTime.current = null;
    }
    debounceTime.current = setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      callback(...args);
    }, timeOut || 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps || []);
  return cb;
};

export default useDebouncedCallBack;
