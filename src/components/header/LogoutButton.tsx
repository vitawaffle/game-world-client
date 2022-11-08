import { useNavigate } from 'react-router-dom';

import useLogout from '../../hooks/useLogout';
import useGetMe from '../../hooks/useGetMe';
import useLocalization from '../../localization/useLocalization';

const LogoutButton = () => {
  const navigate = useNavigate();
  const logout = useLogout();
  const getMe = useGetMe();
  const { strings } = useLocalization();

  const handleLogoutClick = () => {
    logout();
    getMe().finally(() => {
      navigate('/home');
    });
  };

  return (
    <button
      type="button"
      onClick={handleLogoutClick}
      className="btn btn-outline-primary"
    >
      {strings.components.header.logOut}
    </button>
  );
};

export default LogoutButton;
