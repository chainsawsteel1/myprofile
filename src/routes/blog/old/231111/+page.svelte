<script>
    import { MetaTags } from "svelte-meta-tags";
    import { page } from "$app/stores";
    import { movepg } from '$lib/utils';

    import { loadmd } from "$lib/mdperse";

    /**
	 * @type {string}
	 */
    let md
    loadmd($page.url.href + "/main.md").then(html => {
        md = html
    })
</script>

<main>
    <article>
        {@html md}

        <br>
        <button on:click="{() => movepg("/blog/old")}">BACK</button>
    </article>
</main>

<MetaTags
    title="231111"
    openGraph={{
        type: 'website',
        url: $page.url.href,
        title: '231111',
        description: 'chainsのサイト - 人生たのベントカレンダー🎶 Advent Calendar 2023',
    }}
/>