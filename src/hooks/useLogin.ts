import { useCookies } from 'react-cookie';

import useClient from './useClient';
import useGetMe from './useGetMe';

const useLogin = () => {
  const [cookie, setCookies] = useCookies(['token']);
  const client = useClient();
  const getMe = useGetMe();

  const login = async (data: {
    username: string,
    password: string,
  }) => {
    const token = (await client.post<{ token: string }>(
      '/auth/login',
      data,
    )).data.token;

    setCookies('token', token);

    return getMe();
  };

  return login;
};

export default useLogin;
