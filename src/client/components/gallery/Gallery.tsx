import {
  GalleryContainer,
  GalleryImgContainer,
  GalleryWrapper,
} from "../../utils/styles/gallery/GalleryStyled";
import { GalleryDataType } from "../../utils/types";
import { GalleryData } from "./data/GalleryData";

export const Gallery = () => {
  return (
    <GalleryContainer>
      <GalleryWrapper>
        {GalleryData.map((img: GalleryDataType) => (
          <GalleryImgContainer key={img.imgSrc} imgSrc={img.imgSrc} />
        ))}
      </GalleryWrapper>
    </GalleryContainer>
  );
};
