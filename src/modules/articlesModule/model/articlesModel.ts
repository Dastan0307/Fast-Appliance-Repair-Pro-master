import { requester } from "@lib/requester";
import { generateBaseUrl } from "@utils/utilFetcher";
import { ArticleResponse } from "../types/types";

export const getArticlesData = async (
  page: number = 1,
  pageSize: number = 8
): Promise<ArticleResponse> => {
  const endpoint = `blog/?page=${page}&page_size=${pageSize}`;
  try {
    const response = await requester(generateBaseUrl(endpoint));
    return response as ArticleResponse;
  } catch (error) {
    console.error("Failed to fetch articles:", error);
    return { count: 0, next: null, previous: null, results: [] };
  }
};

export const getArticleData = async (slug: string) => {
  const endpoint = `blog/${slug}`;
  try {
    const response = await requester(generateBaseUrl(endpoint));
    return response || { result: null };
  } catch (error) {
    console.error("Failed to fetch article:", error);
    return { result: null };
  }
};

const url = "blog";

export const getOtherArticles = async () => {
  const response = await requester(generateBaseUrl(url));
  return response;
};
