<script>
    import { MetaTags } from "svelte-meta-tags";
    import { page } from "$app/stores";

    import { movepg } from '$lib/utils';
</script>

<main>
    <article>
        <button on:click="{() => movepg("/blog/221201")}">221201 - 人生たのヴェントカレンダー🎶(アーカイブ)</button>
        <br>
        <button on:click="{() => movepg("/blog/221204")}">221201 - えとるねん(アーカイブ)</button>
        <br>
        <button on:click="{() => movepg("/blog/231109")}">231109 - 新技術入手</button>
        <br>
        <button on:click="{() => movepg("/blog/231111")}">231111 - 人生たのベントカレンダー🎶 Advent Calendar 2023</button>
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