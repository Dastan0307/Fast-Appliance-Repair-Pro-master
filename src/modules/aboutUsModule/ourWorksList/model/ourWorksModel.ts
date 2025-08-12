import { requester } from "@lib/requester";
import { generateBaseUrl } from "@utils/utilFetcher";
import { WorksResponse } from "../types/types";

export const getWorksData = async (page: number = 1, pageSize: number = 8) => {
  const endpoint = `casestudies/?page=${page}&page_size=${pageSize}`;
  try {
    const response = await requester(generateBaseUrl(endpoint));
    return response as WorksResponse;
  } catch (error) {
    console.error("Failed to fetch vacancies:", error);
    return { count: 0, next: null, previous: null, results: [] };
  }
};
export const getWorksDataMobile = async () => {
  const endpoint = `casestudies/`;
  try {
    const response = await requester(generateBaseUrl(endpoint));
    return response;
  } catch (error) {
    console.error("Failed to fetch vacancies:", error);
    return { results: [] };
  }
};
