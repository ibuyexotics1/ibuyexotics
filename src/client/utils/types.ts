import { FileWithPath } from "react-dropzone";
import { FieldErrorsImpl, UseFormGetValues, UseFormRegister, UseFormSetValue } from "react-hook-form";


// Data types
export type VinObj = {
  "VIN": string
}

export type VinDataType = {
  Value: string;
  ValueId: string;
  Variable: string;
  VariableId: string;
}

export type DataType = {
  vin?: VinObj;
  vinData?: VinDataType[]
  personalData?: InfoParams
  carData?: CarInfoParams
}

// Info form params
export type InfoParams = {
  "First Name": string;
  "Last Name": string;
  "Email": string;
  "Zip Code": string;
  "Phone Number": string;
  "Interior Color": string;
  "Exterior Color": string;
  "Mileage": string;
};

export type InfoFormFieldProps = {
  register: UseFormRegister<InfoParams>;
  errors: FieldErrorsImpl<{
    "First Name": string;
    "Last Name": string;
    "Email": string;
    "Zip Code": string;
    "Phone Number": string;
    "Interior Color": string;
    "Exterior Color": string;
    "Mileage": string;
  }>;
};

// Car info form params
export type CarImagesParams = {
  carImages: FileWithPath[]
}

export type CarInfoFormParams = {
  "Condition": string;
  "Transmission": string;
  "Ownership": string;
  "Modifications": string;
  "Accident": string;
  "Clean Title": string;
  "Previous Canadian": string;
  "Financing": string;
  "Additional Info": string;
};

export type CarInfoParams = {
  "Condition": string;
  "Transmission": string;
  "Ownership": string;
  "Modifications": string;
  "Accident": string;
  "Clean Title": string;
  "Previous Canadian": string;
  "Financing": string;
  "Additional Info": string;
  "Car Images": FileWithPath[]
};

export type CarInfoFormFieldProps = {
  setValue?: UseFormSetValue<CarInfoParams>;
  getValues?: UseFormGetValues<CarInfoParams>
  register: UseFormRegister<CarInfoParams>;
  errors: FieldErrorsImpl<{
    "Condition": string;
    "Transmission": string;
    "Ownership": string;
    "Modifications": string;
    "Accident": string;
    "Clean Title": string;
    "Previous Canadian": string;
    "Financing": string;
    "Additional Info": string;
    "Car Images": FileWithPath[]
  }>;
};

export type DropzoneFieldProps = {
  setValue: UseFormSetValue<CarInfoParams>;
  getValues: UseFormGetValues<CarInfoParams>
  register: UseFormRegister<CarInfoParams>;
  errors: FieldErrorsImpl<{
    "Car Images": FileWithPath[];
  }>;
};

//Personal info data types
export interface SelectPersonalInputType {
  selectOptions: string[];
}

export type InfoFieldType = {
  propName: string;
  inputType: string;
  minNum: number;
  maxNum: number;
  pattern: RegExp | undefined;
};

//Car info data types
export interface SelectInputType {
  propName: string;
  selectOptions: string[];
}

export interface RadioInputType {
  propName: string;
}

//Faq types
export type FaqOpenType = {
  [id: number]: boolean
}
