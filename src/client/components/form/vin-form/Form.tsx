import { ReactElement, useState } from "react";
import { FormSection } from "../../../utils/styles/form/FormStyled";
import { CarInfoForm } from "./third-step/CarInfoForm";
import {
  CarInfoParams,
  DataType,
  InfoParams,
  VinDataType,
  VinObj,
} from "../../../utils/types";
import { VinDecoderForm } from "./first-step/VinDecoderForm";
import { PersonalInfoForm } from "./second-step/PersonalInfoForm";
import { postVinForm } from "../../../utils/api";
import { toast } from "react-toastify";

export const Form = () => {
  const [stepIdx, setStepIdx] = useState<number>(0);
  const [data, setData] = useState<DataType>();
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleVinData = (data: VinDataType[], vin: VinObj) => {
    setData((prevData) => ({
      ...prevData,
      vin,
      vinData: data,
    }));
  };

  const handlePersonalData = (data: InfoParams) => {
    setData((prevData) => ({
      ...prevData,
      personalData: data,
    }));
  };

  const createFormData = (data: any): FormData => {
    const formData = new FormData();
    const { vin, personalData, carData, vinData } = data;

    // Append vin obj fields
    for (const key in vin) {
      formData.append(`vin[${key}]`, vin[key]);
    }

    // Append personalData fields
    for (const key in personalData) {
      formData.append(`personalData[${key}]`, personalData[key]);
    }

    // Append carData fields excluding Car Images
    const carDataWithoutImages = { ...carData };
    if (carData["Car Images"]) {
      delete carDataWithoutImages["Car Images"];
    }
    for (const key in carDataWithoutImages) {
      formData.append(`carData[${key}]`, carDataWithoutImages[key]);
    }

    // Append vinData fields
    vinData.forEach((item: any, index: number) => {
      formData.append(`vinData[${item.Variable}]`, item.Value);
    });

    // Append Car Images files
    if (carData["Car Images"]) {
      const carImages = carData["Car Images"];
      carImages.forEach((file: File, index: number) => {
        formData.append(`carImages`, file);
      });
    }
    return formData;
  };

  const handleOnSubmit = async (carData: CarInfoParams) => {
    setLoading(true);
    setData((prevData) => ({
      ...prevData,
      carData,
    }));
    const postData: DataType | undefined = { ...data, carData };
    const form = createFormData(postData);
    try {
      const res = await postVinForm(form);
      setLoading(false);
      toast(`${res.data}!`, { type: "success" });
      setStepIdx(0);
    } catch (err: any) {
      setLoading(false);
      toast("Error sending email!", { type: "error" });
    }
  };

  const handleNext = () => {
    setStepIdx((i: number) => {
      if (i > 3) return i;
      return i + 1;
    });
  };

  const handleBack = () => {
    setStepIdx((i: number) => {
      if (i <= 0) return i;
      return i - 1;
    });
  };

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

  return <FormSection>{steps[stepIdx]}</FormSection>;
};
