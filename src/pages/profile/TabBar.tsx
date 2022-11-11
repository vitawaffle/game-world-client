import TabBarProps from './TabBarProps';

const TabBar = ({ children }: TabBarProps) => (
  <ul className="nav nav-tabs mb-3">
    {children}
  </ul>
);

export default TabBar;
