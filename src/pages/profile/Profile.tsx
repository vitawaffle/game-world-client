import { Outlet } from 'react-router-dom';

import Layout from '../../components/Layout';
import Header from '../../components/header/Header';
import Row from '../../components/Row';
import TabBar from './TabBar';
import Tab from './Tab';
import useLocalization from '../../localization/useLocalization';

const Profile = () => {
  const { strings } = useLocalization();

  return (
    <>
      <Header />
      <Layout>
        <Row>
          <TabBar>
            <Tab to="/profile/basic">
              {strings.pages.profile.basic}
            </Tab>
            <Tab to="/profile/security">
              {strings.pages.profile.security}
            </Tab>
          </TabBar>
        </Row>
        <Row>
          <Outlet />
        </Row>
      </Layout>
    </>
  );
};

export default Profile;
