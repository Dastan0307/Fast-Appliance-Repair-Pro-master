import { requester } from "@lib/requester";
import { generateBaseUrl } from "@utils/utilFetcher";
import { VacanciesResponse } from "../types/types";

export const getVacanciesData = async (
  page: number = 1,
  pageSize: number = 8
) => {
  const endpoint = `vacancies/?page=${page}&page_size=${pageSize}`;
  try {
    const response = await requester(generateBaseUrl(endpoint));
    return response as VacanciesResponse;
  } catch (error) {
    console.error("Failed to fetch vacancies:", error);
    return { count: 0, next: null, previous: null, results: [] };
  }
};
