<script>
    import { MetaTags } from "svelte-meta-tags";
    import { page } from "$app/stores";
    import { movepg } from "$lib/utils";
</script>

<main>
    <article>
        <div class="tools">
            <h2>TOOLS</h2>

            <button on:click="{() => movepg("/tools/ggrks")}">GGRKS</button>
            <br>
            <button on:click="{() => movepg("/tools/mfm")}">MDtoMFM</button>
            <br>
            <button on:click="{() => movepg("/test")}">テストページ</button>
        </div>
    </article>
</main>

<style>

</style>

<MetaTags
    title="TOOLS"
    openGraph={{
        type: 'website',
        url: $page.url.href,
        title: 'chainsのサイト - TOOLS',
        description: 'chainsの作った役に立つか分からない謎ツール一覧です。',
    }}
/>