import { Container } from './../UI/Container';
import React from 'react';
import Meta from '../layouts/Meta';
import LandingNavbar from './landing/LandingNavbar';
import AppContent from '../UI/AppContent';
import Footer from './Footer';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <Meta />
      <AppContent>
        <LandingNavbar />
        <Container>
          {children}
        </Container>
      </AppContent>
      <Footer/>
    </>
  );
};

export default Layout;
