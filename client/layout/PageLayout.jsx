import React from 'react';
import Container from './Container';
import Nav from './Nav';
import Footer from './Footer';

export default function PageLayout({children}) {
  return (
    <>
      <Nav/>
      <Container>
        {children}
        <Footer />
      </Container>
    </>
  )
}