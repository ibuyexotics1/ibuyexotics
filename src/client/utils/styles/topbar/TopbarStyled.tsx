import { motion } from "framer-motion";
import styled from "styled-components";

export const TopbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10;
  padding: 50px 80px;

  @media (max-width: 1024px) {
    padding: 30px;
  }
`;

export const BurgerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  position: relative;
  min-height: 30px;
  width: 30px;
`;

export const BurgerLine = styled(motion.div)`
  position: relative;
  display: flex;
  height: 3px;
  width: 25px;
  background: white;
`;

export const BurgerLine2 = styled(motion.div)`
  position: relative;
  display: flex;
  height: 3px;
  width: 25px;
  background: white;
`;
