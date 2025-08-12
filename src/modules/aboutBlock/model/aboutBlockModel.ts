import { requester } from "@lib/requester";
import { generateBaseUrl } from "@utils/utilFetcher";

const endpoints = {
  about: "about",
  brandHeaders: "brand-headers",
  installationHeaders: "installation-headers",
  repair: "repair-headers",
  areas: "cities-headers",
};

export const getData = async () => {
  const response = await requester(generateBaseUrl(endpoints.about));
  return response;
};

export const getHeaderBrands = async () => {
  const response = await requester(generateBaseUrl(endpoints.brandHeaders));
  return response;
};

export const getHeaderInstallation = async () => {
  const response = await requester(
    generateBaseUrl(endpoints.installationHeaders)
  );
  return response;
};

export const getHeaderRepair = async () => {
  const response = await requester(generateBaseUrl(endpoints.repair));
  return response;
};
export const getHeaderAreas = async () => {
  const response = await requester(generateBaseUrl(endpoints.areas));
  return response;
};
