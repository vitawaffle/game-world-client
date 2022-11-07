import useClient from './useClient';
import User from '../entity/User';
import useDispatch from '../redux/useDispatch';
import { setUser } from '../redux/slices/authSlice';

const useGetMe = () => {
  const dispatch = useDispatch();
  const client = useClient();

  const getMe = async () => {
    const user = (await client.get<User>('/users/me')).data;
    dispatch(setUser(user));
    return user;
  };

  return getMe;
};

export default useGetMe;
