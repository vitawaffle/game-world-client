import { Link } from 'react-router-dom';

import Layout from '../../components/Layout';
import Header from '../../components/header/Header';
import CenterFormRow from '../../components/CenterFormRow';
import LoginForm from './LoginForm';

const Login = () => (
  <>
    <Header />
    <Layout>
      <CenterFormRow>
        <h3>Please, log in</h3>
      </CenterFormRow>
      <CenterFormRow>
        <LoginForm />
      </CenterFormRow>
      <CenterFormRow>
        <p>Don't have an account? <Link to="/signin">Sign in</Link></p>
      </CenterFormRow>
    </Layout>
  </>
);

export default Login;
