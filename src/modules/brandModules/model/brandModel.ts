import { requester } from "@lib/requester";
import { generateBaseUrl } from "@utils/utilFetcher";

export const getBrandData = async (slug: string) => {
  const endpoint = `brands/${slug}`;
  try {
    const response = await requester(generateBaseUrl(endpoint));
    return response || { result: null };
  } catch (error) {
    console.error("Failed to fetch article:", error);
    return { result: null };
  }
};
