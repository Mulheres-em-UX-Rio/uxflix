import React from 'react';
import { VideoCardGroupContainer, Title } from './carousel-styles';
import VideoCard from './components/VideoCard/video_card-index';
import Slider, { SliderItem } from './components/Slider/slider-index';

function VideoCardGroup({
  key,
  type,
}) {
  const typeTitle = type.titulo;
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

          return (
            <SliderItem key={conteudo.title}>
              <VideoCard
                videoCat={type.id}
                videoTitle={conteudo.title}
                videoDesc={conteudo.description}
                videoURL={conteudo.url}
                videoTags={conteudo.tags}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default VideoCardGroup;
