import useLocalization from '../../localization/useLocalization';
import ProfileRow from './ProfileRow';
import UsernameForm from './UsernameForm';

const Basic = () => {
  const { strings } = useLocalization();

  return (
    <ProfileRow>
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
    </ProfileRow>
  );
};

export default Basic;
