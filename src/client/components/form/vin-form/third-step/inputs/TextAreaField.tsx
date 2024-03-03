import React, { useState } from "react";
import {
  InputLabelContainer,
  InputLabel,
  InputField,
  InputError,
  InputContainer,
  TextAreaContainer,
  TextAreaInput,
  TextAreaCharacters,
} from "../../../../../utils/styles/form/inputs/InputStyled";
import {
  CarInfoFormFieldProps,
  CarInfoParams,
  InfoFormFieldProps,
  InfoParams,
} from "../../../../../utils/types";

interface InputProps extends CarInfoFormFieldProps {
  propName: string;
}

export const TextAreaField: React.FC<InputProps> = ({
  register,
  errors,
  propName,
}) => {
  const [charactersNum, setCharactersNum] = useState<number>(500);

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const remainingCharacters = 500 - event.target.value.length;
    setCharactersNum(remainingCharacters < 0 ? 0 : remainingCharacters);
  };

  return (
    <TextAreaContainer>
      <InputLabelContainer>
        <InputLabel htmlFor={propName}>{propName}</InputLabel>
        {errors[propName as keyof CarInfoParams] && (
          <InputError>
            {errors[propName as keyof CarInfoParams]?.message}
          </InputError>
        )}
      </InputLabelContainer>
      <TextAreaInput
        id={propName}
        {...register(`${propName}` as keyof CarInfoParams, {
          required: `${propName} is required`,
          minLength: 2,
          maxLength: 500,
        })}
        onChange={handleTextAreaChange}
      />
      <TextAreaCharacters>{charactersNum} characters left</TextAreaCharacters>
    </TextAreaContainer>
  );
};
