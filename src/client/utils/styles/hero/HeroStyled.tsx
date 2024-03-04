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
`;

export const HeroTitle = styled.h1`
  font-size: 250px;
  color: rgb(255, 255, 255, 0.9);
  font-family: Six Caps;
  text-transform: uppercase;
  font-weight: 400;
  max-width: 700px;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 80px;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 8;
  gap: 20px;
`;

export const HeroGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(11, 11, 11, 1) 100%
  );
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
