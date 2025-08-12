import { requester } from "@lib/requester";
import { generateBaseUrl } from "@utils/utilFetcher";

export const getMapData = async () => {
  const endpoint = "locations";
  const response = await requester(generateBaseUrl(endpoint));
  return response;
};

export const getServiceLocations = async (slug: string) => {
  const endpoint = `cities/${slug}`;
  const response = await requester(generateBaseUrl(endpoint));
  return response;
};
