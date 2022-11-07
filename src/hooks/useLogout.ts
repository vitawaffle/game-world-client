import { useCookies } from 'react-cookie';

import useGetMe from './useGetMe';

const useLogout = () => {
  const [cookie, setCookie, removeCookie] = useCookies(['token']);
  const getMe = useGetMe();

  const logout = async () => {
    removeCookie('token');

    return getMe();
  };

  return logout;
};

export default useLogout;
