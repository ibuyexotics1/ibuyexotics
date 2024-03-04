import { motion } from "framer-motion";
import styled from "styled-components";

type TopbarProps = {
  isActive: boolean;
};

export const TopbarContainer = styled.div<TopbarProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: ${(props) => (props.isActive ? "fixed" : "absolute")};
  top: 0;
  width: 100%;
  z-index: 10;
  padding: 20px 80px;

  @media (max-width: 1024px) {
    padding: 10px 20px;
  }
`;

export const LogoWrapper = styled.a`
  cursor: pointer;
`;

export const TopbarLogo = styled.img`
  width: 150px;

  @media (max-width: 1024px) {
    width: 130px;
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
