<script>
    import { MetaTags } from "svelte-meta-tags";
    import { page } from "$app/stores";
</script>

<main>
    <h1 class="toph1">BLOG</h1>

    <article>
        <button><a href="/blog/221201">221201 - 人生たのヴェントカレンダー🎶(アーカイブ)</a></button>
    </article>
</main>

<MetaTags
    title="BLOG"
    openGraph={{
        type: 'website',
        url: $page.url.href,
        title: 'BLOG',
        description: 'chainsのサイト - BLOG',
    }}
/>