import styled from "styled-components";

type ImgProps = {
  imgSrc: string;
};

export const GalleryContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  height: max-content;
  padding: 50px 20px;
  width: 100%;
`;

export const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
  width: 1150px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const GalleryImgContainer = styled.div<ImgProps>`
  background-image: ${(props) => `url(${props.imgSrc})`};
  background-size: cover;
  background-position: center;
  height: 100%;
  height: 200px;
  aspect-ratio: 1 / 1;
  width: 100%;
  cursor: pointer;

  @media (max-width: 1024px) {
    max-height: 400px;
    height: 100%;
  }

  @media (max-width: 700px) {
    height: 100%;
  }
`;
