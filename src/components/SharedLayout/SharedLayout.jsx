import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from 'components/GlobalStyle';
import { AppBar } from 'components/AppBar/AppBar';
import { Loader } from 'components/Loader/Loader';
import { Wrapper } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <AppBar />

      <Wrapper>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Wrapper>

      <GlobalStyle />
    </>
  );
};
