import React from 'react';
import styled from 'styled-components';
import Menu from '../Menu/menu-index';
import Footer from '../Footer/footer-index';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding: 50px 5%;
`;

function PageDefault({ children }) {
  return (
    <>
      <Menu />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  );
}

export default PageDefault;
