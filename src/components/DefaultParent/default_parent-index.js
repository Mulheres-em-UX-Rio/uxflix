import React from 'react';
import styled, { css } from 'styled-components';

import Menu from '../Menu/menu-index';
import Footer from '../Footer/footer-index';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding: 2% 5%;
  border-top: 1px solid #252525;
  ${({ paddingAll }) => css`
    padding: ${paddingAll};
  `}
  @media (max-width: 800px) {
    padding: 6% 5%;
  }
`;

function PageDefault({ children, paddingAll }) {
  return (
    <>
      <Menu />
      <Main paddingAll={paddingAll}>
        {children}
      </Main>
      <Footer />
    </>
  );
}

export default PageDefault;
