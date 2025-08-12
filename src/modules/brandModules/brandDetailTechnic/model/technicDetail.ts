import { requester } from "@lib/requester";
import { generateBaseUrl } from "@utils/utilFetcher";

export const getTechnicDetail = async (technic: string) => {
  const url = `products/${technic}`;
  try {
    const response = await requester(generateBaseUrl(url));
    return response || null;
  } catch (error) {
    console.error("Failed to fetch article:", error);
    return null;
  }
};
