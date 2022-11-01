import Layout from './Layout';
import Header from './header/Header';

const ErrorLayout = ({ children }: ErrorLayoutProps) => (
  <>
    <Header />
    <Layout>
      <div className="row">
        <div className="col">
          <h1>Oops, something went wrong!</h1>
        </div>
      </div>
      {children}
    </Layout>
  </>
);

export default ErrorLayout;

export type ErrorLayoutProps = {
  children: any;
};
