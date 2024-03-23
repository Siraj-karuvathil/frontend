import { DependencyList, useEffect } from 'react';
import useTimeout from './useTimeout';

const useDebounce = (
  callback: () => void,
  dependancies: DependencyList,
  delay: number,
) => {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...dependancies, reset]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(clear, []);
};

export default useDebounce;
