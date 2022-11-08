import useClient from './useClient';

const useSignin = () => {
  const client = useClient();

  const signin = async (data: {
    email: string,
    username: string,
    password: string,
  }) => {
    await client.post('/auth/signin', data);
  };

  return signin;
};

export default useSignin;
