import { requester } from "@lib/requester";
import { generateBaseUrl } from "@utils/utilFetcher";

const url = "faqs";
export const getFaqsData = async () => {
  const response = await requester(generateBaseUrl(url));
  return response;
};
