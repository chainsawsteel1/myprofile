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
        title: 'TOOLS',
        description: 'chainsのサイト - TOOLS',
    }}
/>