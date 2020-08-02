import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 300px;
  height: 180px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: auto;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  transition: all 0.3s ease-in-out 0s;
  &:hover,
  &:focus {
    transform: scale(1.2);
    z-index: 1;
  }
  
  &:not(:first-child) {
    /*  */
  }
`;
