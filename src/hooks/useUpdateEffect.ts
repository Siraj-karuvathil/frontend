/* eslint-disable @typescript-eslint/no-unsafe-return */
import { DependencyList, useEffect, useRef } from 'react';

const useUpdateEffect = (
  callback: () => void | (() => void),
  deps?: DependencyList,
) => {
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    // eslint-disable-next-line consistent-return
    return callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useUpdateEffect;
