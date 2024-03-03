import { useState } from "react";
import { toast } from "react-toastify";
import { postVinForm } from "../api";
import {
  DataType,
  VinDataType,
  VinObj,
  InfoParams,
  CarInfoParams,
} from "../types";

export const useVinForm = () => {
  const [stepIdx, setStepIdx] = useState<number>(0);
  const [data, setData] = useState<DataType>();
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleVinData = (data: VinDataType[], vin: VinObj) => {
    setData((prevData: VinDataType[]) => ({
      ...prevData,
      vin,
      vinData: data,
    }));
  };

  const handlePersonalData = (data: InfoParams) => {
    setData((prevData: InfoParams) => ({
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
    setData((prevData: CarInfoParams) => ({
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

  return {
    stepIdx,
    isLoading,
    handleVinData,
    handlePersonalData,
    handleOnSubmit,
    handleNext,
    handleBack,
  };
};
