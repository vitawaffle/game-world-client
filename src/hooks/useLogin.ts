import client from '../client';

const useLogin = () => (data: {
  username: string,
  password: string,
}) => client.post('/auth/login', );

export default useLogin;
