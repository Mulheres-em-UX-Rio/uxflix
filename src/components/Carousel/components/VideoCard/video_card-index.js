import React, { useState } from 'react';
import Modal from 'react-modal';
import { VideoCardContainer } from './video_card-styles';

import closeModal from '../../../../assets/imgs/icon-clear_search.svg';
import dynamicImg from '../../../../assets/imgs/bg-card.svg';
import cardFlagImgListen from '../../../../assets/imgs/icon-listen.svg';
import cardFlagImgRead from '../../../../assets/imgs/icon-read.svg';

Modal.setAppElement('#root');

function getYouTubeId(youtubeURL) {
  return youtubeURL.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    '$7',
  );
}

function VideoCard({
  videoCat, videoTitle, videoDesc, videoURL, videoTags,
}) {
  let imgBgColor = '#434343';
  const colors = ['#8e7cc3', '#0097a7', '#741b47', '#434343'];
  const textColor = '#fff';
  const [modalIsOpen, setModalIsOpen] = useState(false);
  let hasNoImg = false;

  function getImgColor() {
    imgBgColor = colors[Math.floor(Math.random() * colors.length)];
  }

  let image; let flag; let
    url;
  if (videoCat === 2) { // video
    image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
    url = `${videoURL.replace('watch?v=', 'embed/')}?autoplay=1&showinfo=0&controls=2&fs=0`;
  }
  if (videoCat === 3) { // spotify
    hasNoImg = true;
    image = dynamicImg;
    flag = cardFlagImgListen;
    url = `${videoURL.replace('spotify.com/', 'spotify.com/embed/')}`;
    // (For example, spotify:album:1DFixLWuPkv3KT3TnV35m3 or https://open.spotify.com/album/4RuzGKLG99XctuBMBkFFOC.)
  }
  if (videoCat === 4) { // artigos
    hasNoImg = true;
    image = dynamicImg;
    flag = cardFlagImgRead;
    url = videoURL;
  }
  return (
    <>
      <div className="card-parent" onClick={() => setModalIsOpen(true)}>
        <VideoCardContainer
          url={image}
          title={videoTitle}
        />
        <div className="card-options">
          <span>aaa</span>
        </div>

        {hasNoImg ? (
          <div className={flag !== cardFlagImgRead ? 'card-info listen' : 'card-info'}>
            <p>{videoTitle}</p>
            <img src={flag} />
          </div>
        ) : (
          <></>
        )}
      </div>
      <Modal
        className="modal-content"
        overlayClassName="modal-overlay"
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <iframe src={url} title={videoTitle} allow="autoplay" controls="0" showinfo="0"/>
        <button
          className="close-modal"
          onClick={() => setModalIsOpen(false)}
          type="button"
        >
          <img src={closeModal} alt="Fechar Modal" />
        </button>
      </Modal>
    </>
  );
}

export default VideoCard;
