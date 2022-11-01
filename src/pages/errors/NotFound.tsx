import { Link } from 'react-router-dom';

import ErrorLayout from '../../components/ErrorLayout';

const NotFound = () => (
  <ErrorLayout>
    <div className="row">
      <div className="col">
        <h3>404 - Not Found</h3>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <p>
          You seem to be lost - there is no such page.
          Reopen the site or use the <Link to="/home">link</Link> to return
          to the main page.
        </p>
      </div>
    </div>
  </ErrorLayout>
);

export default NotFound;
