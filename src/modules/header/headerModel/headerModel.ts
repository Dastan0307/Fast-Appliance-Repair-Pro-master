import { requester } from "@lib/requester";
import { generateBaseUrl } from "@utils/utilFetcher";

const endpoint = "brand-headers";

export const getBrandHeader = async () => {
  const response = await requester(generateBaseUrl(endpoint));
  return response;
};
