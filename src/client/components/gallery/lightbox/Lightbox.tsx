import { useEffect } from "react";
import {
  LightboxContainer,
  LightboxClose,
  LightboxImg,
  LightboxImgWrapper,
} from "../../../utils/styles/gallery/LightboxStyled";

type props = {
  handleClose: () => void;
  selectedImg: string;
};

export const Lightbox: React.FC<props> = ({ selectedImg, handleClose }) => {
  useEffect(() => {
    if (selectedImg) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <LightboxContainer
      key={selectedImg}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <LightboxClose onClick={handleClose} />
      <LightboxImgWrapper>
        <LightboxImg src={selectedImg} />
      </LightboxImgWrapper>
    </LightboxContainer>
  );
};
