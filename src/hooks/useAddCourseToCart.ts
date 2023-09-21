import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useAppDispatch from '../redux/hooks/useAppDispatch';
import useAppSelector from '../redux/hooks/useAppSelector';
import { addToCart } from '../redux/thunks/cartThunk';

const useAddCourseToCart = () => {
    const [adding, setAdding] = useState<string | null>();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const auth = useAppSelector(state => state.auth.data);
    const handleAddCourseToCart = useCallback((itemId: string) => {
        if(!auth) {
            navigate('/login');
        }
        setAdding(itemId);
        dispatch(addToCart(itemId))
        .then((res: any) => {
            console.log(res);
            if(res.error) {
                throw new Error(res.error.message);
            }
            navigate('/cart');
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            setAdding(null);
        })
    }, [auth, dispatch, navigate]);

    return {adding, handleAddCourseToCart}
}

export default useAddCourseToCart