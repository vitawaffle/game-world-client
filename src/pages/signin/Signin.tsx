import { Link } from 'react-router-dom';

import Layout from '../../components/Layout';
import Header from '../../components/header/Header';
import CenterFormRow from '../../components/CenterFormRow';
import useLocalization from '../../localization/useLocalization';
import SigninForm from './SigninForm';

const Signin = () => {
  const { strings } = useLocalization();

  return (
    <>
      <Header />
      <Layout>
        <CenterFormRow>
          <h3>
            {strings.pages.signin.prompt}
          </h3>
        </CenterFormRow>
        <CenterFormRow>
          <SigninForm />
        </CenterFormRow>
        <CenterFormRow>
          <p>
            {strings.pages.signin.logInPrompt}
            &nbsp;
            <Link to="/login">
              {strings.pages.signin.logIn}
            </Link>
          </p>
        </CenterFormRow>
      </Layout>
    </>
  );
};

export default Signin;
