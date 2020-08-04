import React from 'react';
import { VideoCardGroupContainer, Title } from './carousel-styles';
import VideoCard from './components/VideoCard/video_card-index';
import Slider, { SliderItem } from './components/Slider/slider-index';

function VideoCardGroup({
  key,
  type,
}) {
  const typeTitle = type.title;
  // const categoryColor = category.cor;
  // const categoryExtraLink = category.link_extra;
  const { conteudos } = type;
  return (
    <VideoCardGroupContainer>
      {typeTitle && (
        <>
          <Title>
            {typeTitle}
          </Title>
          {/* {categoryExtraLink
            && (
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}
            </ExtraLink>
            )} */}
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
                // categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default VideoCardGroup;
