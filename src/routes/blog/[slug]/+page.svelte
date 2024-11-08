<script lang="ts">
    import { MetaTags } from "svelte-meta-tags";
    import { page } from "$app/stores";

    import { movepg } from '$lib/utils.js';

    import { setupViewTransition } from 'sveltekit-view-transition';
    const { transition } = setupViewTransition();

    export let data
</script>

<main>
    <article>
        <button on:click="{() => movepg("/blog")}">BACK</button>
        <div class="title">
            <h2 use:transition={data.title}>{data.title}</h2>
            <p use:transition={data.title + "d"}>{data.createdAt}</p>
            <img use:transition={data.title + "i"} src={data.eyecatch?.url} alt="" />
        </div>
        <p>TODO: 目次</p>

        <br>
        <br>

        <div class="cnt">
            <div class="content">{@html data.content}</div>
        </div>

        <br>
        <br>

        <button on:click="{() => movepg("/blog")}">BACK</button>
    </article>
</main>

<style>
    .title {
        text-align: center;
    }
</style>

<MetaTags
    title={data.title}
    openGraph={{
        type: 'website',
        url: $page.url.href,
        title: 'BLOG',
        description: data.ogptxt,
        images: [{
            url: data.ogpimg?.url ?? ""
        }],
        siteName: 'chainsのサイト',
    }}
/>