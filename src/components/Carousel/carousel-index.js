import React from 'react';
import { VideoCardGroupContainer, Title } from './carousel-styles';
import VideoCard from './components/VideoCard/video_card-index';
import Slider, { SliderItem } from './components/Slider/slider-index';

function VideoCardGroup({
  key,
  type,
}) {
  const typeTitle = type.title;
  const { conteudos } = type;
  return (
    <VideoCardGroupContainer>
      {typeTitle && (
        <>
          <Title>
            {typeTitle}
          </Title>
        </>
      )}
      <Slider>
        {conteudos.map((conteudo, index) => {
          // if (key && index === 0) {
          //   return null;
          // }

          return (
            <SliderItem key={conteudo.title}>
              <VideoCard
                videoTitle={conteudo.title}
                videoURL={conteudo.url}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default VideoCardGroup;
