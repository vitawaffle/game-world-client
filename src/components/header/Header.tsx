import { Link } from 'react-router-dom';

import HeaderLink from './HeaderLink';
import useLocalization from '../../localization/useLocalization';
import useSelector from '../../redux/useSelector';
import { selectIsAuthenticated } from '../../redux/slices/authSlice';
import LogoutButton from './LogoutButton';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { strings } = useLocalization();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <nav className="navbar navbar-expand-lg bg-light mb-4">
      <div className="container-fluid">
        <Link to="/home" className="navbar-brand">
          {strings.applicationName}
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#headerContent"
          aria-controls="headerContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="headerContent" className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <HeaderLink to="/home">
              {strings.components.header.home}
            </HeaderLink>
            {isAuthenticated && (
              <HeaderLink to="/profile">
                {strings.components.header.profile}
              </HeaderLink>
            )}
          </ul>
          <div className="d-flex">
            <LanguageSwitcher />
            {!isAuthenticated && (
              <Link to="/login" className="btn btn-outline-primary me-2">
                {strings.components.header.logIn}
              </Link>
            )}
            {!isAuthenticated && (
              <Link to="/signin" className="btn btn-primary">
                {strings.components.header.signIn}
              </Link>
            )}
            {isAuthenticated && (
              <LogoutButton />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
