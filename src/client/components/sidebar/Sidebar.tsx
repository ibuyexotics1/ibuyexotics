import { useState } from "react";
import {
  SidebarContainer,
  SidebarNav,
  NavText,
  NavContainer,
  NavTextAfter,
} from "../../utils/styles/sidebar/SidebarStyled";
import { navBackTextVariants, navTextVariants } from "../../utils/variants";

export const Sidebar = () => {
  const [isHover, setHover] = useState<string>("");
  const navArr: Array<string> = ["about", "vin contact", "faq"];

  return (
    <SidebarContainer
      key="sidebar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SidebarNav>
        {navArr.map((navItem: string) => (
          <NavContainer
            onMouseLeave={() => setHover("")}
            onMouseEnter={() => setHover(navItem)}
          >
            <NavText
              variants={navTextVariants}
              animate={isHover === navItem ? "active" : "inactive"}
              transition={{ duration: 0.2 }}
              isInactiveHover={isHover !== "" && isHover !== navItem}
              to="#"
            >
              {navItem}
            </NavText>
            <NavTextAfter
              initial={{ y: "100%" }}
              variants={navBackTextVariants}
              transition={{ duration: 0.2 }}
              animate={isHover === navItem ? "active" : "inactive"}
              to="#"
            >
              {navItem}
            </NavTextAfter>
          </NavContainer>
        ))}
      </SidebarNav>
    </SidebarContainer>
  );
};
