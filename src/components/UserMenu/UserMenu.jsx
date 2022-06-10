import { Greeeting } from './UserMenu.styled';
import { Wrapper } from 'components/AuthNav/AuthNav.styled';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/Auth';
import defaulAvatar from './default-avatar.png';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUserName);
  return (
    <Wrapper>
      <img
        src={defaulAvatar}
        alt=""
        width="32"
        style={{ marginRight: '5px' }}
      />
      <Greeeting>Wellcome, {userName}</Greeeting>
      <Button
        variant="outlined"
        size="small"
        onClick={() => dispatch(authOperations.logout())}
      >
        Logout
      </Button>
    </Wrapper>
  );
};

export default UserMenu;
