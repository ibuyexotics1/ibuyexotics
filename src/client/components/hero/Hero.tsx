import {
  HeroArrow,
  HeroButton,
  HeroContainer,
  HeroSubtitle,
  HeroSubtitleContainer,
  HeroTitle,
  SubtitleLine,
} from "../../utils/styles/hero/HeroStyled";
import { FaChevronDown } from "react-icons/fa";

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroTitle>Unlock your exotic car's true value</HeroTitle>
      <HeroSubtitleContainer>
        <SubtitleLine />
        <HeroSubtitle>Discover Offers</HeroSubtitle>
        <SubtitleLine />
      </HeroSubtitleContainer>
      <HeroButton>Get an offer</HeroButton>
      <HeroArrow
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        <FaChevronDown />
      </HeroArrow>
    </HeroContainer>
  );
};
