<script>
    import { MetaTags } from "svelte-meta-tags";
    import { page } from "$app/stores";
    import { movepg } from '$lib/utils';
    import { onMount } from "svelte";

    import { loadmd } from "$lib/mdperse";

    /**
	 * @type {string}
	 */
    let md
    onMount(()=> {
        loadmd($page.url.href + "/main.md").then(html => {
        md = html
        })
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
    title="221204"
    openGraph={{
        type: 'website',
        url: $page.url.href,
        title: 'chainsのサイト - えとるねん(アーカイブ)',
        description: 'えとるねん(アーカイブ)',
    }}
/>