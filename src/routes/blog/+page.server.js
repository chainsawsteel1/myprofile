import { getList } from "../../lib/microcms";


export const load = async () => {
    // @ts-ignore
    return await getList();
};

export const prerender = true;