import useSelector from '../redux/useSelector';
import { selectUser } from '../redux/slices/authSlice';

const useIsAuthenticated = () => {
  const user = useSelector(selectUser);

  return !!user;
};

export default useIsAuthenticated;
