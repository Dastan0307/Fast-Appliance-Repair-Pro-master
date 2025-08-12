import { NEXT_PUBLIC_BASE_URL } from "@utils/constants";

export const requester = async (url: string) => {
  try {
    if (NEXT_PUBLIC_BASE_URL === undefined) {
      throw new Error("Base url not defined!");
    }

    const response = await fetch(url, { next: { revalidate: 120 } });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Request error:", error);
  }
};
