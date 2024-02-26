import { useRef, useState } from "react";
import {
  InputLabelContainer,
  InputError,
  InputContainer,
  RadioInputContainer,
  RadioContainer,
  RadioSelectLabel,
  RadioInput,
  InputLabel,
} from "../../../../../utils/styles/form/inputs/InputStyled";
import {
  CarInfoFormFieldProps,
  CarInfoParams,
} from "../../../../../utils/types";

interface SelectInputProps extends CarInfoFormFieldProps {
  propName: string;
}

export const RadioInputField: React.FC<SelectInputProps> = ({
  register,
  errors,
  propName,
}) => {
  return (
    <InputContainer>
      <InputLabelContainer>
        <InputLabel>{propName}</InputLabel>
        {errors[propName as keyof CarInfoParams] && (
          <InputError>
            {errors[propName as keyof CarInfoParams]?.message}
          </InputError>
        )}
      </InputLabelContainer>

      <RadioContainer>
        <RadioInputContainer htmlFor={`${propName}-yes`}>
          <RadioInput
            type="radio"
            value="yes"
            id={`${propName}-yes`}
            {...register(`${propName}` as keyof CarInfoParams, {
              required: "Required",
            })}
          />
          <RadioSelectLabel htmlFor={`${propName}-yes`}>Yes</RadioSelectLabel>
        </RadioInputContainer>

        <RadioInputContainer htmlFor={`${propName}-no`}>
          <RadioInput
            type="radio"
            value="no"
            id={`${propName}-no`}
            {...register(`${propName}` as keyof CarInfoParams, {
              required: "Required",
            })}
          />
          <RadioSelectLabel htmlFor={`${propName}-no`}>No</RadioSelectLabel>
        </RadioInputContainer>
      </RadioContainer>
    </InputContainer>
  );
};
