import useClient from './useClient';
import useDispatch from '../redux/useDispatch';
import { setUser } from '../redux/slices/authSlice';
import User from '../entities/User';

const useGetMe = () => {
  const client = useClient();
  const dispatch = useDispatch();

  const getMe = async () => {
    const user = (await client.get<User>('/users/me')).data;
    dispatch(setUser(user));
  };

  return getMe;
};

export default useGetMe;
