import {configureStore} from '@reduxjs/toolkit';
import { FC } from 'react';
import { Provider } from 'react-redux';
import authSlice from '../slices/authSlice';
import cartSlice from '../slices/cartSlice';
import courseSlice from '../slices/courseSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
    course: courseSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export function withReduxProvider<T extends {}>(Component: FC<T>) {
  return (props: T) => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  )
}
