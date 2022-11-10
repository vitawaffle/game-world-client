import TabBarProps from './TabBarProps';

const TabBar = ({ children }: TabBarProps) => (
  <ul className="nav nav-tabs">
    {children}
  </ul>
);

export default TabBar;
