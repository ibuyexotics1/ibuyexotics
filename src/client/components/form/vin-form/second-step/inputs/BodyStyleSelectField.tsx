import {
    InputLabelContainer,
    InputLabel,
    InputError,
    InputContainer,
    SelectInput,
    SelectOption,
} from "../../../../../utils/styles/form/inputs/InputStyled";
import { InfoFormFieldProps } from "../../../../../utils/types";

interface SelectInputProps extends InfoFormFieldProps {
    selectOptions: string[];
}

export const BodyStyleSelectField: React.FC<SelectInputProps> = ({
    register,
    errors,
    selectOptions,
}) => {
    return (
        <InputContainer>
            <InputLabelContainer>
                <InputLabel>Body Style</InputLabel>
                {errors.bodyStyle && (
                    <InputError>{errors.bodyStyle.message}</InputError>
                )}
            </InputLabelContainer>
            <SelectInput
                id='bodyStyle'
                {...register('bodyStyle', {
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
