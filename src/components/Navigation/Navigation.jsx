import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/Auth';
import { Wrapper, Link } from 'components/AuthNav/AuthNav.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Wrapper>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </Wrapper>
  );
};

export default Navigation;
