import { InfoFieldType } from "../../../../../utils/types";

export const FirstNameData: InfoFieldType = {
  propName: "First Name",
  inputType: "text",
  minNum: 2,
  maxNum: 64,
  pattern: undefined,
};

export const LastNameData: InfoFieldType = {
  propName: "Last Name",
  inputType: "text",
  minNum: 2,
  maxNum: 64,
  pattern: undefined,
};

export const EmailData: InfoFieldType = {
  propName: "Email",
  inputType: "email",
  minNum: 2,
  maxNum: 254,
  pattern:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

export const ZipCodeData: InfoFieldType = {
  propName: "Zip Code",
  inputType: "text",
  minNum: 5,
  maxNum: 5,
  pattern: /^\d{5}$/,
};

export const PhoneNumberData: InfoFieldType = {
  propName: "Phone Number",
  inputType: "tel",
  minNum: 10,
  maxNum: 15,
  pattern: /^[0-9]+$/,
};

export const InteriorColorData: InfoFieldType = {
  propName: "Interior Color",
  inputType: "text",
  minNum: 2,
  maxNum: 64,
  pattern: undefined,
};

export const ExteriorColorData: InfoFieldType = {
  propName: "Exterior Color",
  inputType: "text",
  minNum: 2,
  maxNum: 64,
  pattern: undefined,
};

export const CarMileageData: InfoFieldType = {
  propName: "Mileage",
  inputType: "text",
  minNum: 1,
  maxNum: 64,
  pattern: /^[0-9,]+$/,
};
