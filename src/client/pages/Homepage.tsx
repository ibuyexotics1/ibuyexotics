import { Form } from "../components/form/vin-form/Form";
import { Hero } from "../components/hero/Hero";
import { Topbar } from "../components/topbar/Topbar";
import { HomeContainer } from "../utils/styles/home/HomeStyled";

export const Homepage = () => {
  return (
    <HomeContainer>
      <Topbar />
      <Hero />
      <Form />
    </HomeContainer>
  );
};
