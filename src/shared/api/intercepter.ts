import axios from "axios";
import {API_URL} from "@/shared/config/path-creator";

export const $api = axios.create({
  baseURL: API_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});