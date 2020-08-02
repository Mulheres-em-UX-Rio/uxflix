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
  }
  
  &:not(:first-child) {
    /*  */
  }
`;
