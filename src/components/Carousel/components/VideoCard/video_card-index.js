import React, { useState } from "react";
import Modal from "react-modal";
import { VideoCardContainer } from "./video_card-styles";

import closeModal from '../../../../assets/imgs/icon-clear_search.svg';

Modal.setAppElement("#root");

function getYouTubeId(youtubeURL) {
  return youtubeURL.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    "$7"
  );
}

function VideoCard({ videoTitle, videoURL, categoryColor }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const image = `https://img.youtube.com/vi/${getYouTubeId(
    videoURL
  )}/hqdefault.jpg`;
  const url = `${videoURL.replace("watch?v=", "embed/")}?autoplay=1&showinfo=0&controls=2&fs=0`;
  return (
    <>
      <VideoCardContainer
        url={image}
        onClick={() => setModalIsOpen(true)}
        title={videoTitle}
      />
      <Modal
        className="modal-content"
        overlayClassName="modal-overlay"
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <iframe src={url} title={videoTitle} allow="autoplay" controls="0" showinfo="0" />
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
