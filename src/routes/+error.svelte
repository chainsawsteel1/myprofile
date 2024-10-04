<script>
    import { MetaTags } from "svelte-meta-tags";
    import { page } from "$app/stores";
</script>

<main>
    {#if $page.status == 404}
        <h1 class="toph1">404</h1>
    {:else}
        <h1 class="toph1">ERROR</h1>
    {/if}
</main>

<MetaTags
    title="ERROR"
    openGraph={{
        type: 'website',
        url: $page.url.href,
        title: 'ERROR',
        description: 'chainsのサイト - ERROR',
    }}
/>