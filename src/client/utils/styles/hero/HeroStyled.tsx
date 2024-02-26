import styled from "styled-components";
import { motion } from "framer-motion";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: url("hero.png");
  background-size: cover;
  background-position: bottom center;
  padding: 0px 20px;
`;

export const HeroTitle = styled.h1`
  font-size: 50px;
  color: rgb(255, 255, 255, 0.9);
  font-family: "DM Serif Display", serif;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: 400;
  max-width: 700px;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 30px;
  }
`;

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
  font-family: Lato;
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
