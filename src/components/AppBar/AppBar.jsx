import Navigation from 'components/Navigation/Navigation';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import { Header } from './AppBar.styled';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/Auth';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
      <Outlet />
    </>
  );
};

export default AppBar;
