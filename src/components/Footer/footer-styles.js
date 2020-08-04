import styled from 'styled-components';

export const FooterBase = styled.footer`
  border-top: 1px solid #252525;
  color: var(--white);
  text-align: center;
  padding: 20px 25px 30px;
  color: var(--white);
  text-align: center;
  display: inline-flex;
  width: 100%;
  align-items: flex-end;
  justify-content: space-between;
  font-size: 12px;
  color: var(--blackLighter);
  p {
    font-size: 14px;
    color: var(--grayMedium);
    margin: 0;
    text-align: left;
    &.alura {
      font-size: 12px;
      color: var(--blackLighter);
    }
    i, a {
      color: var(--primary);
      font-style: unset;
      text-decoration: none;
    }
  }
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    p {
      text-align: center;
    }
  }
`;
