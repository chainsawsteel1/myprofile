<script>
    import { MetaTags } from "svelte-meta-tags";
    import { page } from "$app/stores";
    import PGTITLE from "../components/PGTITLE.svelte";
</script>

<main>
    <h1 class="toph1">HOME</h1>

    <article>
        <h2>WIP</h2>
        <p>サイトをまた新しく作り変えた</p>
    </article>
</main>

<style>

</style>

<MetaTags
    title="HOME"
    openGraph={{
        type: 'website',
        url: $page.url.href,
        title: 'HOME',
        description: 'chainsのサイト - HOME',
    }}
/>