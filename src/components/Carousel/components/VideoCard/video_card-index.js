import React, { useState } from 'react';
import Modal from 'react-modal';
import { VideoCardContainer } from './video_card-styles';

import closeModal from '../../../../assets/imgs/icon-clear_search.svg';
import dynamicImg from '../../../../assets/imgs/bg-card.svg';
import cardImgListen from '../../../../assets/imgs/icon-listen.svg';
import cardImgRead from '../../../../assets/imgs/icon-read.svg';

Modal.setAppElement('#root');

function getYouTubeId(youtubeURL) {
  return youtubeURL.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    '$7',
  );
}

function VideoCard({videoCat, videoTitle, videoDesc, videoURL, videoTags}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  let isVideo = true;
  let image; let flag; let url;

  if (videoCat === 2) {
    image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
    url = `${videoURL.replace('watch?v=', 'embed/')}?autoplay=1&showinfo=0&controls=2&fs=0`;
  } else {
    isVideo = false;
    image = dynamicImg;
    if (videoCat === 3) { // spotify
      flag = cardImgListen;
      url = `${videoURL.replace('spotify.com/', 'spotify.com/embed/')}`;
      // (For example, spotify:album:1DFixLWuPkv3KT3TnV35m3 or https://open.spotify.com/album/4RuzGKLG99XctuBMBkFFOC.)
    }
    if (videoCat === 4) { // artigos
      flag = cardImgRead;
      url = videoURL;
    }
  }

  function handleClick() {
    if (flag !== cardImgRead) {
      setModalIsOpen(true);
    } else {
      window.open(url, '_blank');
    }
  }

  return (
    <>
      <div className="card-parent" onClick={() => handleClick()}>
        <VideoCardContainer url={image} title={videoTitle} />

        {/* <div className="card-options">
          <span />
        </div> */}

        {isVideo ? (
          <></>
        ) : (
          <div className={flag !== cardImgRead ? 'card-info listen' : 'card-info'}>
            <p>{videoTitle}</p>
            <img src={flag} />
          </div>
        )}
      </div>
      <Modal
        className="modal-content"
        overlayClassName="modal-overlay"
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <iframe
          src={url}
          title={videoTitle}
          allow="autoplay"
          controls="0"
          showinfo="0"
          className={isVideo ? '' : 'audio'}
        />
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
