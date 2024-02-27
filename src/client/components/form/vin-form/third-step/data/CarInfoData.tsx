import { SelectInputType, RadioInputType } from "../../../../../utils/types";

export const VehicleConditionData: SelectInputType = {
  propName: "Vehicle Condition",
  selectOptions: ["Select Condition", "Excellent", "Very Good", "Good", "Fair"],
};

export const VehicleTransmissionData: SelectInputType = {
  propName: "Vehicle Transmission",
  selectOptions: ["Select Transmission", "Manual", "Automatic"],
};

export const OwnershipData: SelectInputType = {
  propName: "Ownership Type",
  selectOptions: ["Select Ownership", "Private Owner", "Dealer"],
};

export const VehicleFinancingData: SelectInputType = {
  propName: "Vehicle Financing",
  selectOptions: ["Select Financing", "Paid", "Loan", "Lease"],
};

export const ModificationsData: RadioInputType = {
  propName: "Modifications",
};

export const AccidentData: RadioInputType = {
  propName: "Accident",
};

export const CleanTitleData: RadioInputType = {
  propName: "Clean Title",
};

export const PrevCanadianData: RadioInputType = {
  propName: "Previous Canadian",
};
