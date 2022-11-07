import useClient from './useClient';
import useLogin from './useLogin';

const useSignin = () => {
  const client = useClient();
  const login = useLogin();

  const signin = async (data: {
    email: string,
    username: string,
    password: string,
  }) => {
    await client.post('/auth/signin', data);

    return login({
      username: data.username,
      password: data.password,
    });
  };

  return signin;
};

export default useSignin;
