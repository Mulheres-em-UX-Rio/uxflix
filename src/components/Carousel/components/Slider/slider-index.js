/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 2;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 40px;
    height: 40px;
    color: var(--white);
    background-color: #101010;
    border-radius: 30px;
    transform: initial;
    opacity: .8;
    &:before {
      font-size: 45px;
      line-height: 0.3;
      font-family: "Klavika-Bold";
    }
    &:hover {
      opacity: 1;
    }
  }
  .slick-prev {
    left: 2%;
    &:before {
      content: '«';
    }
  }
  .slick-next {
    right: 1.4%;
    &:before {
      content: '»';
    }
  }
  .slick-list {
    min-height: 210px;
    height: unset;
    display: grid;
    align-items: center;
    padding-left: 5%;
  }
  .slick-arrow {
    display: none !important;
  }
  &:hover {
    .slick-arrow {
      display: block !important;
      &.slick-disabled {
        display: none !important;
      }
    }
  }
`;

export const SliderItem = styled.li`
  margin-right: 4px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;

const Slider = ({ children }) => (
  <Container>
    <SlickSlider {...{
      dots: false,
      infinite: false,
      speed: 300,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
      swipeToSlide: true,
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider;
