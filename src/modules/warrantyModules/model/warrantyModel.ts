import { requester } from "@lib/requester";
import { generateBaseUrl } from "@utils/utilFetcher";

const url = "guarantees";

export const getWarranties = async () => {
  const response = await requester(generateBaseUrl(url));
  return response;
};
