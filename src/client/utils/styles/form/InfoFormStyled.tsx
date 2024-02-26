import { motion } from "framer-motion";
import styled from "styled-components";

export const NextStepContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  max-width: 1024px;
  width: 100%;
  padding: 20px;
`;

export const InfoFormTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const InfoFormTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-family: Lato;
  font-weight: 800;
  color: white;
  text-transform: uppercase;
  width: 100%;
  text-align: center;

  @media (max-width: 1100px) {
    font-size: 20px;
  }
`;

export const InfoFormSubtitle = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  text-transform: uppercase;
  color: gold;
  font-family: Lato;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 15px;
  }
`;

export const InfoFormContainer = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  justify-content: center;
  align-items: center;
  height: max-content;
  margin: 50px 0px;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr !important;
    margin: 20px 0px;
  }
`;

export const InfoFormSubmit = styled.button`
  border: none;
  background: gold;
  color: black;
  height: 50px;
  width: 200px;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
`;
