<script>
    import { MetaTags } from "svelte-meta-tags";
    import { page } from "$app/stores";

    import { movepg } from '$lib/utils';

    import { setupViewTransition } from 'sveltekit-view-transition';
    const { transition } = setupViewTransition();

    export let data
</script>

<main>
    <article>
        <button on:click="{() => movepg("/blog")}">BACK</button>
        <div class="title">
            <h2>{data.title}</h2>
            <img use:transition={data.title} src={data.eyecatch?.url} alt="" />
        </div>

        <br>
        <br>

        <div class="content">{@html data.content}</div>

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
        description: 'chainsのサイト - BLOG',
    }}
/>