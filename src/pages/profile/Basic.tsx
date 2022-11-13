import useLocalization from '../../localization/useLocalization';
import UsernameForm from './UsernameForm';

const Basic = () => {
  const { strings } = useLocalization();

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
      <div className="col">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              {strings.pages.profile.changeUsername}
            </h5>
            <UsernameForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basic;
