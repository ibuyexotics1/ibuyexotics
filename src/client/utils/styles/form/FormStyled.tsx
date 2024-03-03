import { motion } from "framer-motion";
import styled from "styled-components";

type LoadingProps = {
  isLoading: boolean;
};

export const LoadingContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: gold;
  font-size: 50px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgb(11, 11, 11, 0.9);
  z-index: 10;
`;

export const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
  width: 100%;
  padding: 50px 0px;
`;

export const FormInitialContainer = styled(motion.div)<LoadingProps>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 1200px;
  width: 100%;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  position: relative;
  opacity: ${(props) => (props.isLoading ? "0" : 1)};
  padding: 0px 20px;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    min-height: auto;
    padding-bottom: 50px;
    grid-gap: 20px;
  }
`;

export const FormTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const FormSubtitle = styled.p`
  font-size: 20px;
  text-transform: uppercase;
  color: gold;

  @media (max-width: 1024px) {
    font-size: 15px;
  }
`;

export const FormTitle = styled.h2`
  font-size: 40px;
  font-weight: 800;
  color: white;
  text-transform: uppercase;

  @media (max-width: 1100px) {
    font-size: 20px;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 10px;
  z-index: 2;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FormInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const FormInput = styled.input`
  background: #0b0b0b;
  border: 1px solid rgb(250, 250, 250, 0.5);
  border-radius: 0px;
  padding: 0px 20px;
  color: white;
  width: 100%;
  font-size: 20px;
  height: 50px;

  &:focus {
    outline: none;
  }
`;

export const FormSubmit = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  border: none;
  height: 46px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  background: gold;
  text-transform: uppercase;
  color: black;
  padding: 0px 20px;

  @media (max-width: 1024px) {
    width: 100%;
    font-size: 15px;
  }
`;

export const FormSteps = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(0, 0, 0, 0.3);
  color: white;
  padding: 8px;
  border-radius: 50%;
  font-size: 15px;
  font-family: Lato;
`;

export const InputError = styled.p`
  font-size: 15px;
  color: red;
`;

export const FormPrevious = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  height: 50px;
  border: none;
  background: rgb(250, 250, 250, 0.1);
  color: white;
  height: 50px;
  padding: 0px 20px;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;

  @media (max-width: 1024px) {
    width: 100%;
    font-size: 15px;
  }
`;

export const BackText = styled.p`
  font-size: 150px;
  color: white;
  opacity: 0.01;
  position: absolute;
  font-weight: bold;
  left: 10%;

  @media (max-width: 1100px) {
    display: none;
  }
`;
