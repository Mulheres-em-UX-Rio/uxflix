import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 250px;
  height: 150px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  transition: all 0.3s ease-in-out 0s;
  &:hover,
  &:focus {
    transform: scale(1.3);
    z-index: 1;
    box-shadow: 0px 0px 6px #000000;
    &::before {
      position: absolute;
      content: "";
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%);
    }
    /* &::after {
      position: absolute;
      content: "";
      top: 10px;
      right: 10px;
      width: 30px;
      height: 30px;
      border-radius: 25px;
      cursor: pointer;
      z-index: 3;
      background-color: #ffffff30;
      border: 1px solid var(--white);
      background-image: url('../../../../assets/imgs/icon-star.svg');
    } */
  }
  
  &:not(:first-child) {
    /*  */
  }
`;
