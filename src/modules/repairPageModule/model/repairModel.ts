import { requester } from "@lib/requester";
import { generateBaseUrl } from "@utils/utilFetcher";

export const getRepair = async (slug: string) => {
  const endpoint = `repairs/${slug}`;
  try {
    const response = await requester(generateBaseUrl(endpoint));
    return response || { result: null };
  } catch (error) {
    console.error("Failed to fetch article:", error);
    return { result: null };
  }
};

export const getInstallations = async (slug: string) => {
  const endpoint = `installations/${slug}`;
  try {
    const response = await requester(generateBaseUrl(endpoint));
    return response || { result: null };
  } catch (error) {
    console.error("Failed to fetch article:", error);
    return { result: null };
  }
};
