import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const StyledLink = styled(NavLink)`
  display: block;

  padding: 16px 4px;

  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.44px;
  text-decoration: none;

  color: currentColor;

  transition: color var(--transition-duration) var(--transition-timing-function);

  &.active,
  &:is(:hover, :focus) {
    color: var(--primary-color);
  }
`;
