import { Navigation } from 'components/Navigation/Navigation';
import { NavHeader, Wrapper } from './AppBar.styled';

export const AppBar = () => {
  return (
    <NavHeader>
      <Wrapper>
        <Navigation />
      </Wrapper>
    </NavHeader>
  );
};
