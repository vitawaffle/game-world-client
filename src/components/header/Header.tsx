import { Link } from 'react-router-dom';

import HeaderLink from './HeaderLink';
import useLocalization from '../../localization/useLocalization';

const Header = () => {
  const { strings } = useLocalization();

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
          </ul>
          <div className="d-flex">
            <Link to="/login" className="btn btn-outline-primary  me-2">
              {strings.components.header.logIn}
            </Link>
            <Link to="/signin" className="btn btn-primary">
              {strings.components.header.signIn}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
