import styled from 'styled-components';

export const Title = styled.h3`
  font-style: normal;
  font-weight: bold;
  line-height: 1;
  display: inline-block;
  font-size: 26px;
  padding: 0px;
  border-radius: 0px;
  margin: 0;
  padding-left: 5%;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;

export const ExtraLink = styled.a`
  margin-left: 16px;
  text-decoration: none;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
  }
`;

export const VideoCardList = styled.ul`
  margin: 0;
  padding-left: 0;
  padding-bottom: 32px;
  list-style: none;
  display: flex;
  overflow-x: auto;
  flex-direction: row;
  
  li {
    margin-right: 16px;
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  margin: 30px 0;
  &:last-of-type {
    margin-bottom: 120px;
  }
`;
