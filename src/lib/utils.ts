import { goto } from '$app/navigation';
import { page } from '$app/stores';
import { get } from 'svelte/store';
import toast from 'svelte-french-toast';

export const movepg = (url: string) => {
    const $page = get(page);
    if ($page.url.origin + url == $page.url.href) {
        toast.error("既にそのページに居ます", {
            position: "bottom-center",
            style: "border-radius: 0px; background: var(--btn-color); color: var(--dtext-color);"
        });
    } else {
        goto(url);
    } 
};

export const copy = (data: string) => {
    if (!navigator.clipboard) {
        toast.error("コピーできませんでした", {
            position: "bottom-center",
            style: "border-radius: 0px; background: var(--btn-color); color: var(--dtext-color);"
        });
        return;
    }
    navigator.clipboard.writeText(data).then(
        () => {
            toast.success("コピーしました", {
                position: "bottom-center",
                style: "border-radius: 0px; background: var(--btn-color); color: var(--dtext-color);"
            });
        },
        () => {
            toast.error("コピーできませんでした", {
                position: "bottom-center",
                style: "border-radius: 0px; background: var(--btn-color); color: var(--dtext-color);"
            });
        }
    );
}