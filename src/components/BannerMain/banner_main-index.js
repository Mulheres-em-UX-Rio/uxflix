import React from 'react';
import { Link } from 'react-router-dom';
import VideoIframeResponsive from './components/VideoIframeResponsive/banner_video-index';
import { BannerMainContainer, ContentAreaContainer, WatchButton } from './banner_main-styles';

import Button from '../Button/button-index';

// function getYouTubeId(youtubeURL) {
//   return youtubeURL
//     .replace(
//       /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
//       '$7',
//     );
// }

export default function BannerMain({
  bannerTitle,
  bannerDetails,
  bannerImg,
}) {
  // const youTubeID = getYouTubeId(url);
  // const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;
  // const bgUrl = ``;

  return (
    // <BannerMainContainer backgroundImage={bgUrl}>
    <BannerMainContainer>
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          <ContentAreaContainer.Title>
            {bannerTitle}
          </ContentAreaContainer.Title>

          <Button as={Link} className="ButtonLink" to="/cadastro/video">
            Enviar vídeo
          </Button>

          {/* <ContentAreaContainer.Description>
            {bannerDetails}
          </ContentAreaContainer.Description> */}
        </ContentAreaContainer.Item>

        <ContentAreaContainer.Item>
          {bannerImg}
          {/* <VideoIframeResponsive />
          <WatchButton>
            Assistir
          </WatchButton> */}
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}
