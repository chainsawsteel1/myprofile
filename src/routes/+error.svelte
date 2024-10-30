<script>
    import { MetaTags } from "svelte-meta-tags";
    import { page } from "$app/stores";
</script>

<main>
    <article>
        {#if $page.status == 404}
            <h2>404</h2>
        {:else}
            <h2>ERROR</h2>
        {/if}
    </article>
</main>

<MetaTags
    title="ERROR"
    openGraph={{
        type: 'website',
        url: $page.url.href,
        title: 'chainsのサイト - ERROR',
        description: '何かしらの問題が発生したようです。',
    }}
/>