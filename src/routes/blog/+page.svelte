<script lang="ts">
    import { MetaTags } from "svelte-meta-tags";
    import { page } from "$app/stores";

    import { movepg } from '$lib/utils.js';

    import tippy from "svelte-tippy";
    import 'tippy.js/dist/tippy.css';

    import { setupViewTransition } from 'sveltekit-view-transition';
    const { transition } = setupViewTransition();

    export let data
</script>

<main>
    <button class="old" on:click="{() => movepg("/blog/old")}" use:tippy={{content: '旧フォーマットで書かれたやつはこちら', placement: 'top'}}>旧</button>

    <article>
        <p>業務連絡: アイキャッチ画像は1200x630にすること</p>
        <div class="lists">
            {#each data.contents as content}
                <button class="card" on:click="{() => movepg("/blog/" + content.id)}">
                    <p use:transition={content.title}>{content.title}</p>
                    <p use:transition={content.title + "d"}>{content.createdAt}</p>
                    <img use:transition={content.title + "i"} src={content.eyecatch?.url} alt="" />
                </button>
                <br>
            {/each}
        </div>
    </article>
</main>

<style>
    button {
        width: 22em;
    }

    .card img {
        object-fit: contain;
        overflow: hidden;
        height: 11em;
    }

    .card {
        height: 15em;
        width: 22em;
    }

    .old {
        position: absolute;
        bottom: 1em;
        right: 1em;
        top: unset;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
    }
</style>

<MetaTags
    title="BLOG"
    openGraph={{
        type: 'website',
        url: $page.url.href,
        title: 'BLOG',
        description: 'chainsのブログです。更新するかは分かりません。',
        siteName: 'chainsのサイト'
    }}
/>