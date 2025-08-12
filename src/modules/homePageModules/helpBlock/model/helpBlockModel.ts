import { requester } from "@lib/requester";
import { generateBaseUrl } from "@utils/utilFetcher";

const url = 'services-combined-header'

export const getHelpBlock = async () => {
    const response = await requester(generateBaseUrl(url));
    return response;
};