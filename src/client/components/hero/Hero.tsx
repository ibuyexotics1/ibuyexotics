import {
  HeroArrow,
  HeroButton,
  HeroContainer,
  HeroContent,
  HeroGradient,
  HeroTitle,
  HeroVideo,
} from "../../utils/styles/hero/HeroStyled";
import { FaChevronDown } from "react-icons/fa";

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroVideo loop={true} autoPlay={true} src="/porsche.mp4" />
      <HeroContent>
        <HeroTitle>i buy exotics</HeroTitle>
        <HeroButton>Get an offer</HeroButton>
        <HeroArrow
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <FaChevronDown />
        </HeroArrow>
      </HeroContent>
      <HeroGradient />
    </HeroContainer>
  );
};
