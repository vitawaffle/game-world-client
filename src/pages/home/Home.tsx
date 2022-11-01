import Layout from '../../components/Layout';
import Header from '../../components/header/Header';

const Home = () => (
  <>
    <Header />
    <Layout>
      <div className="row">
        <div className="col">
          <h1>Hello, World!</h1>
        </div>
      </div>
    </Layout>
  </>
);

export default Home;
