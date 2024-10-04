<script>
    import { MetaTags } from "svelte-meta-tags";
    import { page } from "$app/stores";
</script>

<main>
    <h1 class="toph1">221201</h1>

    <article>
        コード未実装

        <br>
        <button><a href="/blog">BACK</a></button>
    </article>
</main>

<MetaTags
    title="221201"
    openGraph={{
        type: 'website',
        url: $page.url.href,
        title: '221201',
        description: 'chainsのサイト - 人生たのヴェントカレンダー🎶(アーカイブ)',
    }}
/>