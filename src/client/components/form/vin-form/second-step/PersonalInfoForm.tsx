import { useForm } from "react-hook-form";
import { InfoParams } from "../../../../utils/types";
import {
  InfoFormContainer,
  InfoFormSubtitle,
  InfoFormTitle,
  InfoFormTitleContainer,
  NextStepContainer,
} from "../../../../utils/styles/form/InfoFormStyled";
import {
  FormSubmit,
  FormSteps,
  FormPrevious,
} from "../../../../utils/styles/form/FormStyled";
import { BodyStyleSelectField } from "./inputs/BodyStyleSelectField";
import {
  CarMileageData,
  EmailData,
  ExteriorColorData,
  FirstNameData,
  InteriorColorData,
  LastNameData,
  PhoneNumberData,
  TrimData,
  ZipCodeData,
  selectOptions,
} from "./data/PersonalInfoData";
import { InfoInputField } from "./inputs/InfoInputField";

type props = {
  handleBack: () => void;
  handleNext: () => void;
  handlePersonalData: (data: InfoParams) => void;
};

export const PersonalInfoForm: React.FC<props> = ({
  handleBack,
  handleNext,
  handlePersonalData,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InfoParams>();
  const formFieldProps = { errors, register };

  const onSubmit = (data: InfoParams) => {
    handlePersonalData(data);
    handleNext();
  };

  return (
    <NextStepContainer
      key={"step2"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <InfoFormTitleContainer>
        <InfoFormSubtitle>Step Two</InfoFormSubtitle>
        <InfoFormTitle>Please provide contact information</InfoFormTitle>
      </InfoFormTitleContainer>

      <InfoFormContainer onSubmit={handleSubmit(onSubmit)}>
        <InfoInputField {...FirstNameData} {...formFieldProps} />
        <InfoInputField {...LastNameData} {...formFieldProps} />
        <InfoInputField {...EmailData} {...formFieldProps} />
        <InfoInputField {...ZipCodeData} {...formFieldProps} />
        <InfoInputField {...PhoneNumberData} {...formFieldProps} />
        <InfoInputField {...InteriorColorData} {...formFieldProps} />
        <InfoInputField {...ExteriorColorData} {...formFieldProps} />
        <InfoInputField {...CarMileageData} {...formFieldProps} />
        <FormPrevious type="button" onClick={handleBack}>
          Back
        </FormPrevious>
        <FormSubmit type="submit">
          Continue <FormSteps>2/3</FormSteps>
        </FormSubmit>
      </InfoFormContainer>
    </NextStepContainer>
  );
};
