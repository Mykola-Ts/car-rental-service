import { Nav, NavList, StyledLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Nav>
      <NavList>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/catalog">Catalog</StyledLink>
        </li>
        <li>
          <StyledLink to="/favorites">Favorites</StyledLink>
        </li>
      </NavList>
    </Nav>
  );
};
