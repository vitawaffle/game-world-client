import { useEffect } from 'react';
import Router from './Router';

import useGetMe from './hooks/useGetMe';

const App = () => {
  const getMe = useGetMe();

  useEffect(() => {
    getMe();
  }, [getMe]);

  return (
    <Router />
  );
};

export default App;
