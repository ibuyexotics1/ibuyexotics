import { useState } from "react";
import { Form } from "../components/form/vin-form/Form";
import { Hero } from "../components/hero/Hero";
import { Topbar } from "../components/topbar/Topbar";
import { HomeContainer } from "../utils/styles/home/HomeStyled";
import { Sidebar } from "../components/sidebar/Sidebar";
import { About } from "../components/about/About";
import { AnimatePresence } from "framer-motion";
import { Faq } from "../components/faq/Faq";

export const Homepage = () => {
  const [isActive, setActive] = useState<boolean>(false);

  const handleActive = () => {
    setActive((prev: boolean) => !prev);
  };

  return (
    <HomeContainer>
      <AnimatePresence>{isActive && <Sidebar handleActive={handleActive} />}</AnimatePresence>
      <Topbar isActive={isActive} handleActive={handleActive} />
      <Hero />
      <About />
      <Form />
      <Faq />
    </HomeContainer>
  );
};
