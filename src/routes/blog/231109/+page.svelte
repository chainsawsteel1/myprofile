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
    <h1 class="toph1">231109</h1>

    <article>
        {@html md}

        <br>
        <button on:click="{() => movepg("/blog")}">BACK</button>
    </article>
</main>

<MetaTags
    title="231109"
    openGraph={{
        type: 'website',
        url: $page.url.href,
        title: '231109',
        description: 'chainsのサイト - 新技術入手',
    }}
/>