import React, { useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faAngleLeft,
  faAngleRight
} from "@fortawesome/free-solid-svg-icons";

const Modal = styled.div`
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  padding: 10px;
  z-index: 10;
  background: white;
  border-radius: 10px;
  box-shadow: ${p => p.theme.shadows.z3};
`;

const Img = styled.img`
  height: 100%;
`;

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 9, 25, 0.7);
`;

const Close = styled.button`
  cursor: pointer;
  border: none;
  font-size: 70px;
  position: absolute;
  right: 200px;
  top: 50px;
  color: white;
  background: transparent;
`;

const Navigate = styled.button`
  cursor: pointer;
  border: none;
  font-size: 50px;
  margin: 10px;
  background: none;
  color: white;
`;

export default function ImageModal({ src, text, close, before, next }) {
  const handleKeyDown = ({ key }) => {
    if (key === "ArrowRight") next();
    if (key === "ArrowLeft") before();
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <Backdrop>
      <Close onClick={close}>
        <FontAwesomeIcon icon={faTimes} />
      </Close>
      <Navigate onClick={before}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </Navigate>
      <Modal>
        <Img src={src} alt="closeup of part of house" />
      </Modal>
      <Navigate onClick={next}>
        <FontAwesomeIcon icon={faAngleRight} />
      </Navigate>
    </Backdrop>
  );
}
