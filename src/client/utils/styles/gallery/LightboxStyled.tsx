import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

export const LightboxContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: rgb(0, 0, 0, 0.9);
  height: 100%;
  width: 100%;
  padding: 20px;
`;

export const LightboxClose = styled(IoClose)`
  font-size: 30px;
  color: white;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

export const LightboxImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  position: relative;
`;

export const LightboxImg = styled.img`
  max-height: 700px;
  width: 100%;
  object-fit: contain;
`;
