import { Outlet } from 'react-router-dom';
import { Container, Head, HeaderLink, MainNav } from './SharedLayout.styled';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <Container>
      <Head>
        <MainNav>
          <HeaderLink to="/">Home</HeaderLink>
          <HeaderLink to="/movie">Movies</HeaderLink>
        </MainNav>
      </Head>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
