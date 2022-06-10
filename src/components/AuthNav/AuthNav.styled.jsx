import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  /* padding: 12px; */
  font-weight: 500;
  color: #2a636b;
  font-size: 18px;
  &:not(:last-child) {
    margin-right: 15px;
  }
  &.active {
    text-decoration: underline;
    color: #2196f3;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
