import { useState } from "react";
import {
  SidebarContainer,
  SidebarNav,
  NavText,
  NavContainer,
  NavTextAfter,
} from "../../utils/styles/sidebar/SidebarStyled";
import { navBackTextVariants, navTextVariants } from "../../utils/variants";
import { sidebarNav } from "./data/SidebarData";
import { FaqDataType } from "../../utils/types";

type props = {
  handleActive: () => void;
};

export const Sidebar: React.FC<props> = ({ handleActive }) => {
  const [isHover, setHover] = useState<string>("");

  return (
    <SidebarContainer
      key="sidebar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <SidebarNav>
        {sidebarNav.map((navItem: FaqDataType) => (
          <NavContainer
            key={navItem.name}
            onMouseLeave={() => setHover("")}
            onMouseEnter={() => setHover(navItem.name)}
          >
            <NavText
              variants={navTextVariants}
              animate={isHover === navItem.name ? "active" : "inactive"}
              transition={{ duration: 0.2 }}
              isInactiveHover={isHover !== "" && isHover !== navItem.name}
              to={navItem.link}
              onClick={handleActive}
            >
              {navItem.name}
            </NavText>
            <NavTextAfter
              initial={{ y: "100%" }}
              variants={navBackTextVariants}
              transition={{ duration: 0.2 }}
              animate={isHover === navItem.name ? "active" : "inactive"}
              to={navItem.link}
              onClick={handleActive}
            >
              {navItem.name}
            </NavTextAfter>
          </NavContainer>
        ))}
      </SidebarNav>
    </SidebarContainer>
  );
};
