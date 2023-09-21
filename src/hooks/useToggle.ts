import {useCallback, useState} from 'react';

function useToggle(initialState?: boolean) {
  const [toggle, setToggle] = useState(initialState || false);
  const onToggle = useCallback((state?: boolean) => {
    setToggle(typeof state !== 'boolean' ? prev => !prev : state);
  }, []);
  return [toggle, onToggle] as [boolean, (state?: boolean) => void];
}

export default useToggle;
