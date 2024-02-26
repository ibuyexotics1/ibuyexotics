import {
  InputLabelContainer,
  InputLabel,
  InputError,
  InputContainer,
  SelectInput,
  SelectOption,
} from "../../../../../utils/styles/form/inputs/InputStyled";
import {
  CarInfoFormFieldProps,
  CarInfoParams,
} from "../../../../../utils/types";

interface SelectInputProps extends CarInfoFormFieldProps {
  propName: string;
  selectOptions: string[];
}

export const SelectInputField: React.FC<SelectInputProps> = ({
  register,
  errors,
  propName,
  selectOptions,
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
      <SelectInput
        id={propName}
        {...register(`${propName}` as keyof CarInfoParams, {
          required: "Required",
        })}
      >
        {selectOptions.map((option: string) => (
          <SelectOption
            key={option}
            value={option === selectOptions[0] ? "" : option}
          >
            {option}
          </SelectOption>
        ))}
      </SelectInput>
    </InputContainer>
  );
};
