import * as sitemap from "super-sitemap";

export const GET = async () => {
    return await sitemap.response({
        origin: "https://chainsawsteel1.vercel.app"
    });
};
