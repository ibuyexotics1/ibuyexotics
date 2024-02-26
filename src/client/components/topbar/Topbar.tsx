import { postTest } from "../../utils/api";
import {
  TopbarContainer,
  TopbarLine,
  TopbarTitle,
} from "../../utils/styles/topbar/TopbarStyled";

export const Topbar = () => {
  return (
    <TopbarContainer>
      <TopbarLine />
      <TopbarTitle>i Buy exotic cars</TopbarTitle>
      <TopbarLine />
    </TopbarContainer>
  );
};
