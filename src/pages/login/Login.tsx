import { Link } from 'react-router-dom';

import Layout from '../../components/Layout';
import Header from '../../components/header/Header';
import CenterFormRow from '../../components/CenterFormRow';
import useLocalization from '../../localization/useLocalization';
import LoginForm from './LoginForm';

const Login = () => {
  const { strings } = useLocalization();

  return (
    <>
      <Header />
      <Layout>
        <CenterFormRow>
          <h3>{strings.pages.login.prompt}</h3>
        </CenterFormRow>
        <CenterFormRow>
          <LoginForm />
        </CenterFormRow>
        <CenterFormRow>
          <p>
            {strings.pages.login.signInPrompt}
            <Link to="/signin">
              {strings.pages.login.signIn}
            </Link>
          </p>
        </CenterFormRow>
      </Layout>
    </>
  );
};

export default Login;
