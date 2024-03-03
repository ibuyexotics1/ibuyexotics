import {
  InputLabelContainer,
  InputLabel,
  InputField,
  InputError,
  InputContainer,
} from "../../../../../utils/styles/form/inputs/InputStyled";
import { InfoFormFieldProps, InfoParams } from "../../../../../utils/types";

interface InputProps extends InfoFormFieldProps {
  propName: string;
  inputType: string;
  minNum: number;
  maxNum: number;
  pattern: RegExp | undefined;
}

export const InfoInputField: React.FC<InputProps> = ({
  register,
  errors,
  propName,
  inputType,
  minNum,
  maxNum,
  pattern,
}) => {
  const validationRules: Record<string, any> = {
    required: `${propName} is required`,
    minLength: {
      value: minNum,
      message: `Must be at least ${minNum} characters`,
    },
    maxLength: {
      value: maxNum,
      message: `Must be less than ${maxNum + 1} characters`,
    },
  };

  if (pattern) {
    validationRules.pattern = {
      value: pattern,
      message: `Invalid ${propName} format`,
    };
  }

  return (
    <InputContainer>
      <InputLabelContainer>
        <InputLabel htmlFor={propName}>{propName}</InputLabel>
        {errors[propName as keyof InfoParams] && (
          <InputError>
            {errors[propName as keyof InfoParams]?.message}
          </InputError>
        )}
      </InputLabelContainer>
      <InputField
        id={propName}
        type={inputType}
        {...register(`${propName}` as keyof InfoParams, validationRules)}
      />
    </InputContainer>
  );
};
