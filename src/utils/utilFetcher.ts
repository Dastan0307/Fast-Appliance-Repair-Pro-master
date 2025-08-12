import { NEXT_PUBLIC_BASE_URL } from "./constants";

export const generateBaseUrl = (
  url: string,
  data?: { params?: { [key: string]: string } }
) => {
  const queryParams = data?.params
    ? `?${new URLSearchParams(data.params).toString()}`
    : "";

  const base = NEXT_PUBLIC_BASE_URL?.replace(/\/$/, "") || "";
  const cleanedUrl = url.replace(/^\/+/, "");

  return `${base}/${cleanedUrl}${queryParams}`;
};
