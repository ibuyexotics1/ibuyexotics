import { useForm } from "react-hook-form";
import { CarInfoParams } from "../../../../utils/types";
import {
  InfoFormContainer,
  InfoFormSubtitle,
  InfoFormTitle,
  InfoFormTitleContainer,
  NextStepContainer,
} from "../../../../utils/styles/form/InfoFormStyled";
import React from "react";
import {
  FormSubmit,
  FormSteps,
  FormPrevious,
  LoadingContainer,
} from "../../../../utils/styles/form/FormStyled";
import { SelectInputField } from "./inputs/SelectInputField";
import {
  AccidentData,
  CleanTitleData,
  ModificationsData,
  OwnershipData,
  PrevCanadianData,
  VehicleConditionData,
  VehicleFinancingData,
  VehicleTransmissionData,
} from "./data/CarInfoData";
import { RadioInputField } from "./inputs/RadioInputField";
import { DropzoneField } from "./inputs/DropzoneField";
import { TextAreaField } from "./inputs/TextAreaField";
import { FadeLoader } from "react-spinners";

type props = {
  handleBack: () => void;
  handleOnSubmit: (data: CarInfoParams) => void;
  isLoading: boolean;
};

export const CarInfoForm: React.FC<props> = ({
  handleBack,
  handleOnSubmit,
  isLoading,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<CarInfoParams>();
  const formFieldProps = { errors, register };
  const dropFieldProps = { errors, register, setValue, getValues };

  const onSubmit = (data: CarInfoParams) => {
    handleOnSubmit(data);
  };

  return (
    <NextStepContainer
      key={"step3"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      {isLoading && (
        <LoadingContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          id="loading"
        >
          <FadeLoader color="gold" />
        </LoadingContainer>
      )}
      <InfoFormTitleContainer>
        <InfoFormSubtitle>Step Three</InfoFormSubtitle>
        <InfoFormTitle>Please provide additional information</InfoFormTitle>
      </InfoFormTitleContainer>

      <InfoFormContainer onSubmit={handleSubmit(onSubmit)}>
        <SelectInputField {...VehicleConditionData} {...formFieldProps} />
        <SelectInputField {...VehicleTransmissionData} {...formFieldProps} />
        <SelectInputField {...OwnershipData} {...formFieldProps} />
        <SelectInputField {...VehicleFinancingData} {...formFieldProps} />
        <RadioInputField {...ModificationsData} {...formFieldProps} />
        <RadioInputField {...AccidentData} {...formFieldProps} />
        <RadioInputField {...CleanTitleData} {...formFieldProps} />
        <RadioInputField {...PrevCanadianData} {...formFieldProps} />
        <TextAreaField propName="Additional Info" {...formFieldProps} />
        <DropzoneField {...dropFieldProps} />
        <FormPrevious type="button" onClick={handleBack}>
          Back
        </FormPrevious>
        <FormSubmit type="submit">
          Preview <FormSteps>3/3</FormSteps>
        </FormSubmit>
      </InfoFormContainer>
    </NextStepContainer>
  );
};
