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
`;

export const BurgerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
`;

export const BurgerLine = styled(motion.div)`
  height: 3px;
  width: 30px;
  background: white;
`;
