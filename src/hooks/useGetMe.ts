import useClient from './useClient';
import useDispatch from '../redux/useDispatch';
import { setUser } from '../redux/slices/authSlice';
import User from '../entities/User';

const useGetMe = () => {
  const client = useClient();
  const dispatch = useDispatch();

  const getMe = async () => {
    let user = undefined;

    try {
      user = (await client.get<User>('/users/me')).data;
    } catch (ignore) {
    }

    dispatch(setUser(user));
  };

  return getMe;
};

export default useGetMe;
