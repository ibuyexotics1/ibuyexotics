import { useState } from "react";
import { Form } from "../components/form/vin-form/Form";
import { Hero } from "../components/hero/Hero";
import { Topbar } from "../components/topbar/Topbar";
import { HomeContainer } from "../utils/styles/home/HomeStyled";
import { Sidebar } from "../components/sidebar/Sidebar";

export const Homepage = () => {
  const [isActive, setActive] = useState<boolean>(false);

  const handleActive = () => {
    setActive((prev: boolean) => !prev);
  };

  return (
    <HomeContainer>
      {isActive && <Sidebar />}
      <Topbar handleActive={handleActive} />
      <Hero />
      <Form />
    </HomeContainer>
  );
};
