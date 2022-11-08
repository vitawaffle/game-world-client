import { useCookies } from 'react-cookie';

const useLogout = () => {
  const [, , removeCookie] = useCookies(['token']);

  const logout = () => {
    removeCookie('token');
  };

  return logout;
};

export default useLogout;
