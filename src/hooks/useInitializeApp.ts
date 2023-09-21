import { useEffect } from 'react';
import useAppDispatch from '../redux/hooks/useAppDispatch'
import { fetchUser } from '../redux/thunks/authThunk';

const useInitializeApp = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);
}

export default useInitializeApp