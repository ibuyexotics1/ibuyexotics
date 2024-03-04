import { useForm } from "react-hook-form";
import {
  BackText,
  FormContainer,
  FormDisclaimer,
  FormInitialContainer,
  FormSteps,
  FormSubmit,
  FormSubtitle,
  FormTitle,
  FormTitleContainer,
  InputError,
  LoadingContainer,
} from "../../../../utils/styles/form/FormStyled";
import { VinDataType, VinObj } from "../../../../utils/types";
import { getVinDetails } from "../../../../utils/api";
import {
  InputContainer,
  InputLabelContainer,
  InputLabel,
  InputField,
} from "../../../../utils/styles/form/inputs/InputStyled";
import { useState } from "react";
import { FadeLoader } from "react-spinners";

type props = {
  handleNext: () => void;
  handleVinData: (data: VinDataType[], vin: VinObj) => void;
};

export const VinDecoderForm: React.FC<props> = ({
  handleNext,
  handleVinData,
}) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<VinObj>();

  const onSubmit = async (data: VinObj) => {
    try {
      setLoading(true);
      const res = await getVinDetails(data);
      const errorCodeObject = res.data.Results.find(
        (obj: VinDataType) => obj.Variable === "Error Code"
      );
      if (
        errorCodeObject &&
        errorCodeObject.Value !== "0" &&
        errorCodeObject.Value !== ""
      ) {
        console.log("not valid vin");
        setLoading(false);
        setError("VIN", {
          type: "manual",
          message: "Please enter valid VIN",
        });
        throw new Error("Error Code is not 0");
      }
      handleVinData(
        res.data.Results.filter(
          (item: VinDataType) =>
            item.Value != null &&
            item.Value != "" &&
            item.Value != "Not Applicable"
        ),
        data
      );
      setLoading(false);
      handleNext();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FormInitialContainer
      key={"step1"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      isLoading={isLoading}
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
      <BackText>EXOTIC CARS</BackText>
      <FormTitleContainer>
        <FormSubtitle>Step One</FormSubtitle>
        <FormTitle>Please enter your vin:</FormTitle>
      </FormTitleContainer>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <InputLabelContainer>
            <InputLabel htmlFor="VIN">VIN</InputLabel>
            {errors["VIN"] && <InputError>{errors["VIN"].message}</InputError>}
          </InputLabelContainer>
          <InputField
            type="text"
            id="VIN"
            {...register("VIN", {
              required: "VIN is required",
              minLength: {
                value: 17,
                message: "Must be 17 characters",
              },
            })}
          />
        </InputContainer>
        <FormSubmit>
          Continue <FormSteps>1/3</FormSteps>
        </FormSubmit>
      </FormContainer>
      <FormDisclaimer>
        If you are facing issues uploading images, or VIN, please email your car
        photos to: <span>i-buy-exotics1@gmail.com</span>
      </FormDisclaimer>
    </FormInitialContainer>
  );
};
