import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

type NavTextProps = {
  isInactiveHover: boolean;
};

export const SidebarContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: #0b0b0b;
  z-index: 9;
`;

export const SidebarNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 150px;
  position: relative;
  overflow: hidden;
`;

export const NavText = styled(motion(Link))<NavTextProps>`
  font-size: 150px;
  font-family: Six Caps;
  color: ${(props) => (props.isInactiveHover ? "grey" : "white")};
  text-transform: uppercase;
  letter-spacing: 5px;
  text-decoration: none;
`;

export const NavTextAfter = styled(motion(Link))`
  position: absolute;
  font-size: 150px;
  font-family: Six Caps;
  color: white;
  text-transform: uppercase;
  letter-spacing: 5px;
  text-decoration: none;
`;
