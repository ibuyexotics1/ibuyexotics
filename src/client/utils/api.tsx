import axios, { AxiosRequestConfig } from "axios";
import { VinObj } from "./types";

const VIN_FORM_API = "https://vpic.nhtsa.dot.gov/api/vehicles/decodevin";
const API_URL = import.meta.env.VITE_REACT_APP_API_URL;
const axiosClient = axios.create({ baseURL: API_URL });
const config: AxiosRequestConfig = { withCredentials: true };

export const getVinDetails = (data: VinObj) =>
  axiosClient.get(VIN_FORM_API + `/${data["VIN"]}?format=json`);

export const postVinForm = (data: FormData) =>
  axiosClient.post("/email", data, config);
