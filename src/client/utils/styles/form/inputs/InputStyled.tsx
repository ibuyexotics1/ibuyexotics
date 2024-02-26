import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 400px;
  width: 100%;
  font-family: Lato;

  @media (max-width: 400px) {
    min-width: auto; /* Remove the minimum width at smaller sizes */
  }
`;

export const InputLabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InputLabel = styled.label`
  color: white;
  font-size: 14px;
  font-family: Lato;
`;

export const InputError = styled.p`
  margin: 0;
  color: red;
  font-size: 12px;
  font-weight: 400;
  font-family: Lato;
`;

export const InputField = styled.input`
  background: none;
  color: white;
  font-size: 20px;
  border: 1px solid rgb(250, 250, 250, 0.5);
  padding: 10px 20px;
  font-family: Lato;
  width: 100%;

  &:focus {
    outline: none;
    border: 1px solid gold;
  }
`;

export const SelectInput = styled.select`
  background: none;
  color: white;
  font-size: 20px;
  padding: 10px 20px;
  width: 100%;
  border: 1px solid rgb(250, 250, 250, 0.5);
  cursor: pointer;

  &:focus {
    outline: none;
    border: 1px solid gold;
  }
`;

export const SelectOption = styled.option`
  background: #0b0b0b;
  color: white;
  font-size: 20px;
  border: 1px solid rgb(250, 250, 250, 0.5);
`;

export const RadioContainer = styled.div`
  display: flex;
  gap: 15px;
`;

export const RadioInputContainer = styled.label`
  display: flex;
  gap: 5px;
  padding: 5px 15px;
  background: #1a1a1a;
  border-radius: 20px;
  cursor: pointer;
`;

export const RadioInput = styled.input`
  background: blue;
  color: white;
  font-size: 20px;
  border: 1px solid rgb(250, 250, 250, 0.5);
  padding: 10px 20px;
  font-family: Lato;
  width: 100%;

  &:focus {
    outline: none;
    border: 1px solid gold;
  }
`;

export const RadioSelectLabel = styled.label`
  color: white;
  font-size: 17px;
  cursor: pointer;
  font-family: Lato;
`;

export const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  grid-column: span 2;
  font-family: Lato;

  @media (max-width: 1024px) {
    grid-column: auto;
  }
`;

export const TextAreaInput = styled.textarea`
  color: white;
  background: none;
  font-size: 20px;
  font-family: Lato;
  height: 200px;
  padding: 10px 20px;
  width: 100%;
  border: 1px solid rgb(250, 250, 250, 0.5);
  resize: none;

  &:focus {
    outline: none;
    border: 1px solid gold;
  }
`;

export const TextAreaCharacters = styled.p`
  font-size: 14px;
  color: white;
`;
