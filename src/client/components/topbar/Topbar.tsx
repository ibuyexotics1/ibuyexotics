import {
  BurgerLine,
  BurgerWrapper,
  TopbarContainer,
} from "../../utils/styles/topbar/TopbarStyled";

type props = {
  handleActive: () => void;
};

export const Topbar: React.FC<props> = ({ handleActive }) => {
  return (
    <TopbarContainer>
      <BurgerWrapper onClick={handleActive}>
        <BurgerLine />
        <BurgerLine />
      </BurgerWrapper>
    </TopbarContainer>
  );
};
