import { ReactElement, useState } from "react";
import { FormSection } from "../../../utils/styles/form/FormStyled";
import { CarInfoForm } from "./third-step/CarInfoForm";
import { VinDecoderForm } from "./first-step/VinDecoderForm";
import { PersonalInfoForm } from "./second-step/PersonalInfoForm";
import { useVinForm } from "../../../utils/hooks/useVinForm";

export const Form = () => {
  const { stepIdx, isLoading, handleVinData, handlePersonalData, handleOnSubmit, handleNext, handleBack } = useVinForm()

  const steps: ReactElement[] = [
    <VinDecoderForm handleNext={handleNext} handleVinData={handleVinData} />,
    <PersonalInfoForm
      handleNext={handleNext}
      handleBack={handleBack}
      handlePersonalData={handlePersonalData}
    />,
    <CarInfoForm
      isLoading={isLoading}
      handleBack={handleBack}
      handleOnSubmit={handleOnSubmit}
    />,
  ];

  return <FormSection id='vin'>{steps[stepIdx]}</FormSection>;
};
