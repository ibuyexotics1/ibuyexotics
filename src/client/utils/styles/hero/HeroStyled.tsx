import styled from "styled-components";
import { motion } from "framer-motion";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  position: relative;
  overflow: hidden;
`;

export const HeroVideo = styled.video`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  opacity: 0.3;
`

export const HeroTitle = styled.h1`
  font-size: 250px;
  color: rgb(255, 255, 255, 0.9);
  font-family: Six Caps;
  text-transform: uppercase;
  font-weight: 400;
  max-width: 700px;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 30px;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  z-index: 10;
`

export const HeroSubtitleContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const SubtitleLine = styled.div`
  height: 2px;
  width: 70px;
  background: rgb(250, 250, 250, 0.2);

  @media (max-width: 1024px) {
    width: 30px;
  }
`;

export const HeroSubtitle = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: gold;
  font-family: "DM Serif Display", serif;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: 400;

  @media (max-width: 1024px) {
    font-size: 15px;
  }
`;

export const HeroButton = styled.button`
  border: 1px solid rgb(250, 250, 250, 0.5);
  font-size: 20px;
  color: white;
  font-family: Poppins;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: 800;
  background: none;
  margin-top: 50px;
  padding: 20px 40px;
  cursor: pointer;
  transition: 0.3s all ease-in-out;

  &:hover {
    transition: 0.3s all ease-in-out;
    background: gold;
    color: black;
    border: 1px solid gold;
  }

  @media (max-width: 1024px) {
    font-size: 15px;
  }
`;

export const HeroArrow = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: white;
  margin: 20px 0px;
`;
