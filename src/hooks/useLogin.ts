import { useCookies } from 'react-cookie';

import useClient from './useClient';

const useLogin = () => {
  const client = useClient();
  const [, setCookie] = useCookies(['token']);

  const login = async (data: {
    username: string,
    password: string,
  }) => {
    const token = (await client.post('/auth/login', data)).data.token;
    setCookie('token', token);
  };

  return login;
};

export default useLogin;
