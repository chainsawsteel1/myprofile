import { createClient} from "microcms-js-sdk";
import { SERVICE_DOMAIN, API_KEY } from '$env/static/private';
const client = createClient({
    serviceDomain: SERVICE_DOMAIN,
    apiKey: API_KEY,
});

//APIの呼び出し
/**
 * 
 * @param {import("microcms-js-sdk").MicroCMSQueries} queries 
 * @returns 
 */
export const getList = async (queries) => {
    return await client.get ({ endpoint: "blogs", queries });
};

/**
 * 
 * @param {string} contentId 
 * @param {import("microcms-js-sdk").MicroCMSQueries} queries 
 * @returns 
 */
export const getDetail = async (
    contentId,
    queries
) => {
    return await client.getListDetail ({
        endpoint: "blogs",
        contentId,
        queries,
    });
};