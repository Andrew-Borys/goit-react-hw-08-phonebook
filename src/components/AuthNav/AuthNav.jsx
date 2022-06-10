import { Link, Wrapper } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <Wrapper>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </Wrapper>
  );
};

export default AuthNav;
