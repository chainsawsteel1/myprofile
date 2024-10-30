<script>
    import { MetaTags } from "svelte-meta-tags";
    import { page } from "$app/stores";

    import { movepg } from '$lib/utils';
</script>

<main>
    <article>
        <button on:click="{() => movepg("/blog/old/221201")}">221201 - 人生たのヴェントカレンダー🎶(アーカイブ)</button>
        <br>
        <button on:click="{() => movepg("/blog/old/221204")}">221201 - えとるねん(アーカイブ)</button>
        <br>
        <button on:click="{() => movepg("/blog/old/231109")}">231109 - 新技術入手</button>
        <br>
        <button on:click="{() => movepg("/blog/old/231111")}">231111 - 人生たのベントカレンダー🎶 Advent Calendar 2023</button>
        <br>
        <br>
        <button on:click="{() => movepg("/blog")}">BACK</button>
    </article>
</main>

<MetaTags
    title="BLOG old"
    openGraph={{
        type: 'website',
        url: $page.url.href,
        title: 'BLOG old',
        description: 'chainsの過去のブログがあります。',
        siteName: 'chainsのサイト'
    }}
/>