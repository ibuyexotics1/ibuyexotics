import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate()

  const handleOffer = () => {
    navigate('/#vin')
  }

  return (
    <HeroContainer>
      <HeroVideo loop autoPlay src="/porsche.mp4" muted />
      <HeroContent>
        <HeroTitle>i buy exotics</HeroTitle>
        <HeroButton onClick={handleOffer}>Get an offer</HeroButton>
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
