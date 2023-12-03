import axios, { AxiosRequestConfig } from "axios";

const defaultOptions: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_RAPID_API_BASE_URL,
  params: {
    maxResults: 50,
    part: "id,snippet",
    type: "video",
  },
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KET,
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_API_HOST,
  },
};

export async function makeAPIRequest(
  endpoint: string,
  params: { [key: string]: string }
) {
  const data = await axios.get(endpoint, {
    ...defaultOptions,
    params: { ...defaultOptions.params, ...params },
  });
  return data.data;
}
