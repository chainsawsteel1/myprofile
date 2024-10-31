import { createClient, type MicroCMSQueries, type MicroCMSImage } from "microcms-js-sdk";
import { SERVICE_DOMAIN, API_KEY } from '$env/static/private';
const client = createClient({
    serviceDomain: SERVICE_DOMAIN,
    apiKey: API_KEY,
});

//型定義
export type Blog = {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    title: string;
    content: string;
    ogptxt: string;
    ogpimg?: MicroCMSImage;
    eyecatch?: MicroCMSImage;
};
export type BlogResponse = {
    totalCount: number;
    offset: number;
    limit: number;
    contents: Blog[];
};

//APIの呼び出し
export const getList = async (queries?: MicroCMSQueries) => {
    return await client.get<BlogResponse>({ endpoint: "blogs", queries });
};
export const getDetail = async (
    contentId: string,
    queries?: MicroCMSQueries
) => {
    return await client.getListDetail<Blog>({
        endpoint: "blogs",
        contentId,
        queries,
    });
};