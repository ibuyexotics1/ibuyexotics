import { easeInOut } from "framer-motion";
import {
  BurgerLine,
  BurgerLine2,
  BurgerWrapper,
  TopbarContainer,
} from "../../utils/styles/topbar/TopbarStyled";
import { burgerLineBotVariants, burgerLineTopVariants } from "../../utils/variants";

type props = {
  handleActive: () => void;
  isActive: boolean;
};

export const Topbar: React.FC<props> = ({ handleActive, isActive }) => {
  return (
    <TopbarContainer>
      <BurgerWrapper onClick={handleActive}>
        <BurgerLine
          initial={{ translateY: 0, rotateZ: 0 }}
          variants={burgerLineTopVariants}
          animate={isActive ? 'open' : 'closed'}
          transition={{ duration: 0.3, ease: easeInOut }}
        />
        <BurgerLine2
          initial={{ translateY: 0, rotateZ: 0 }}
          variants={burgerLineBotVariants}
          animate={isActive ? 'open' : 'closed'}
          transition={{ duration: 0.3, ease: easeInOut }}
        />
      </BurgerWrapper>
    </TopbarContainer>
  );
};
