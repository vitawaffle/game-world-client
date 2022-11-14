import useLocalization from '../../localization/useLocalization';
import ProfileRow from './ProfileRow';
import ChangePasswordForm from './ChangePasswordForm';

const Security = () => {
  const { strings } = useLocalization();

  return (
    <ProfileRow>
      <div className="col">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              {strings.pages.profile.changePassword}
            </h5>
            <ChangePasswordForm />
          </div>
        </div>
      </div>
    </ProfileRow>
  );
};

export default Security;
