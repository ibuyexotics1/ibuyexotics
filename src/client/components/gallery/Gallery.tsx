import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  GalleryContainer,
  GalleryImgContainer,
  GalleryWrapper,
} from "../../utils/styles/gallery/GalleryStyled";
import { GalleryDataType } from "../../utils/types";
import { GalleryData } from "./data/GalleryData";
import { Lightbox } from "./lightbox/Lightbox";

export const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState<string>("");

  const handleLightbox = (imgSrc: string) => {
    setSelectedImg(imgSrc);
  };

  const handleClose = () => {
    setSelectedImg("");
  };

  return (
    <>
      <GalleryContainer>
        <GalleryWrapper>
          {GalleryData.map((img: GalleryDataType) => (
            <GalleryImgContainer
              key={img.imgSrc}
              imgSrc={img.imgSrc}
              onClick={() => handleLightbox(img.imgSrc)}
            />
          ))}
        </GalleryWrapper>
      </GalleryContainer>

      <AnimatePresence>
        {selectedImg && (
          <Lightbox handleClose={handleClose} selectedImg={selectedImg} />
        )}
      </AnimatePresence>
    </>
  );
};
