import { Link } from 'react-router-dom';

import Layout from '../../components/Layout';
import Header from '../../components/header/Header';
import CenterFormRow from '../../components/CenterFormRow';
import SigninForm from './SigninForm';

const Signin = () => (
  <>
    <Header />
    <Layout>
      <CenterFormRow>
        <h3>Please, sign in</h3>
      </CenterFormRow>
      <CenterFormRow>
        <SigninForm />
      </CenterFormRow>
      <CenterFormRow>
        <p>Already have an account? <Link to="/login">Log in</Link></p>
      </CenterFormRow>
    </Layout>
  </>
);

export default Signin;
