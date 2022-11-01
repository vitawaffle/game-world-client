const Layout = ({ children }: LayoutProps) => (
  <div className="container">
    {children}
  </div>
);

export default Layout;

export interface LayoutProps {
  children: any;
}
