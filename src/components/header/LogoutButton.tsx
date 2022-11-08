import useLogout from '../../hooks/useLogout';
import useLocalization from '../../localization/useLocalization';

const LogoutButton = () => {
  const logout = useLogout();
  const { strings } = useLocalization();

  const handleLogoutClick = () => {
    logout();
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
