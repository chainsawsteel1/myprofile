import { getDetail } from "../../../lib/microcms";

export const load = async ({ params }) => {
    // @ts-ignore
    return await getDetail(
        params.slug
    );
};

export const prerender = true;