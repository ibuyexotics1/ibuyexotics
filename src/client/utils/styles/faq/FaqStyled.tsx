import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import styled from "styled-components";

export const FaqSectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 50px 20px;
  min-height: 100vh;
  height: 100%;
`;

export const FaqContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  width: 100%;
  height: 100%;
`;

export const FaqTitle = styled.h2`
  font-size: 100px;
  color: white;
  width: 100%;
  text-align: center;
  font-family: Six Caps;
  margin-bottom: 30px;
  letter-spacing: 5px;
  text-transform: uppercase;

  @media (max-width: 1024px) {
    font-size: 40px;
    letter-spacing: 3px;
  }
`;

export const FaqContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  cursor: pointer;
`;

export const FaqQuestionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgb(250, 250, 250, 0.5);
  width: 100%;
  padding: 15px 20px;
  transition: 0.3s all ease-in-out;

  &.active {
    border: 1px solid gold;
    transition: 0.3s all ease-in-out;
  }
`;

export const FaqQuestion = styled.h3`
  font-size: 20px;
  color: white;

  @media (max-width: 1024px) {
    font-size: 15px;
  }
`;

export const FaqDownArrow = styled(FaChevronDown)`
  color: white;
  font-size: 20px;
  transition: 0.3s all ease-in-out;

  &.active {
    transform: rotateX(180deg);
    transition: 0.3s all ease-in-out;
  }
`;

export const FaqAnswerContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  width: 100%;
  overflow: hidden;
  padding: 0px 20px;
  background: gold;
`;

export const FaqAnswer = styled.p`
  color: rgb(250, 250, 250, 0.7);
  font-size: 20px;
  color: #1a1a1a;

  @media (max-width: 1024px) {
    font-size: 15px;
  }
`;
