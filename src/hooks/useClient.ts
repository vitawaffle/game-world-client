import axios from 'axios';
import { useCookies } from 'react-cookie';

const useClient = () => {
  const [cookie] = useCookies(['token']);

  return axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
      'Authorization': cookie.token ? `Bearer ${cookie.token}` : null,
    },
  });
};

export default useClient;
