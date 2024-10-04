<script>
    import { page } from "$app/stores";
</script>

<main>
    {#if $page.status == 404}
        <h1>404</h1>
    {:else}
        <h1>ERROR</h1>
    {/if}
</main>