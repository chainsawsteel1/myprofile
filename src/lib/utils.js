import { goto } from '$app/navigation';
import { page } from '$app/stores';
import { get } from 'svelte/store';
import toast from 'svelte-french-toast';

/**
 * @param {string | URL} url
 */
export const movepg = (url) => {
    const $page = get(page);
    if ($page.url.origin + url == $page.url.href) {
        toast.error("既にそのページに居ます", {
            position: "bottom-center",
            style: "border-radius: 0px; background: var(--btn-color); color: var(--dtext-color); box-shadow: 7px 7px var(--shadow-color);"
        })
    } else {
        goto(url);
    } 
}